import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_ENDPOINT;

const fulfillOrder = (lineItems) => {
  // TODO: fill me in
  console.log("Fulfilling order", lineItems);
}
const createOrder = (session) => {
  // TODO: fill me in
  console.log("Creating order", session);
}

const emailCustomerAboutFailedPayment = (session) => {
  // TODO: fill me in
  console.log("Emailing customer", session);
}

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	if(req.method == "POST"){
		console.log(1)
		const payload = await buffer(req);
		const sig = req.headers['stripe-signature'];

		let event;

		try {
			console.log(2)
		  event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
		} catch (err) {
			console.log(err)
		  return res.status(400).send(`Webhook Error: ${err.message}`);
		}
		console.log(3)
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      // Save an order in your database, marked as 'awaiting payment'
      createOrder(session);

      // Check if the order is paid (for example, from a card payment)
      //
      // A delayed notification payment will have an `unpaid` status, as
      // you're still waiting for funds to be transferred from the customer's
      // account.
      if (session.payment_status === 'paid') {
        fulfillOrder(session);
      }

      break;
    }

    case 'checkout.session.async_payment_succeeded': {
      const session = event.data.object;

      // Fulfill the purchase...
      fulfillOrder(session);

      break;
    }

    case 'checkout.session.async_payment_failed': {
      const session = event.data.object;

      // Send an email to the customer asking them to retry their order
      emailCustomerAboutFailedPayment(session);

      break;
    }
  }
	  	return res.status(200);
	}
}

export default webhookHandler;