// pages/api/create-checkout-session.ts
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("Stripe public key is not defined in env variables");
      return;
    }
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2022-11-15",
    });
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: req.body.transfItems,
        mode: "payment",
        success_url: `${req.headers.origin}/?checkoutSuccess=true`,
        cancel_url: `${req.headers.origin}/?checkoutSuccess=false`,
      });

      res.status(200).json({ id: session.id });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
