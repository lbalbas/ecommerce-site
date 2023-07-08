import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";

const createOrder = (session: any) => {
  console.log("Creating order", session);
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("Stripe public key is not defined in env variables");
      return;
    }
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2022-11-15",
    });
    const endpointSecret = process.env.STRIPE_WEBHOOK_ENDPOINT;
    const payload = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      if (sig !== undefined && endpointSecret !== undefined) {
        event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
      } else {
        return res.status(500).send(`Unexpected Error`);
      }
    } catch (err) {
      console.log(err);
      return res.status(400).send("Webhook Error");
    }

    switch (event.type) {
      case "checkout.session.async_payment_succeeded": {
        const session = event.data.object;

        createOrder(session);

        break;
      }

      case "checkout.session.async_payment_failed": {
        const session = event.data.object;
        //Do stuff
        break;
      }
    }
    return res.status(200).send("Order stored");
  }
};

export default webhookHandler;
