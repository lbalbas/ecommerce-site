import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_ENDPOINT;

const fulfillOrder = (lineItems) => {
  // TODO: fill me in
  //console.log("Fulfilling order", lineItems);
};
const createOrder = (session) => {
  console.log("Creating order", session);
};

const emailCustomerAboutFailedPayment = (session) => {
  // TODO: fill me in
  //console.log("Emailing customer", session);
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const payload = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log(err);
      return res.status(400).send(`Webhook Error: ${err.message}`);
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
