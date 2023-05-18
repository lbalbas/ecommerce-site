import Head from "next/head";
import { useCart } from "../context/CartContext";
import ProductItem from "@/components/ProductItem";
import Counter from "@/components/ItemCounter";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Button from "@/components/Button";
import { loadStripe } from "@stripe/stripe-js";

const transformItems = (items) => {
    return items.map((item) => ({
      price_data: {
        currency: "usd",
        unit_amount: Math.floor(item.price) * 100,
        product_data: {
          name: item.item,
          description: item.description,
        },
      },
      quantity: 1,
    }));
};
const CartPage = () => {
  const { itemsOnCart } = useCart();

  const cartTotal = itemsOnCart.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  const checkout = async () => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    const transfItems = transformItems(itemsOnCart);
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ transfItems }),
    });
    const session = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.error(result.error.message);
    }
  }

  const x = (a: number) => {
    console.log(a);
  };

  return (
    <div className="w-full grid grid-cols-4">
      <Head>
        <title>Your Shopping Cart</title>
      </Head>
      <div className="max-h-[85vh] flex col-span-3 gap-6 flex-col overflow-y-scroll">
        {itemsOnCart.map((item) => {
          return (
            <div className="flex gap-4 items-center">
              <XMarkIcon className="h-8 w-8 cursor-pointer" />
              <ProductItem list={true} key={item.id} data={item} />
              <Counter itemCount={2} stock={4} setCounter={x} />
            </div>
          );
        })}
      </div>
      <div className="flex items-end justify-between">
        <strong>Total</strong> {cartTotal}
        <Button onClick={checkout}>Checkout</Button>
      </div>
    </div>
  );
};

export default CartPage;
