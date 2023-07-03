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
      unit_amount: item.price * 100,
      product_data: {
        name: item.item,
        description: item.description,
      },
    },
    quantity: item.quantity,
  }));
};

const CartPage = () => {
  const {
    itemsOnCart,
    decrementItemQuantity,
    incrementItemQuantity,
    deleteItemFromCart,
  } = useCart();
  const cartTotal = itemsOnCart.reduce(
    (accumulator, item) => accumulator + parseFloat(item.price) * item.quantity,
    0
  );

  const checkout = async () => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    const transfItems = transformItems(itemsOnCart);
    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ transfItems }),
    });
    const session = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="w-full grid gap-8 md:gap-0 md:grid-cols-4">
      <Head>
        <title>Your Shopping Cart</title>
      </Head>
      <div className="max-h-[60vh] md:max-h-[75vh] flex md:col-span-3 gap-6 flex-col overflow-y-scroll">
        {itemsOnCart.map((item) => {
          return (
            <div key={item.id} className="flex gap-4 items-center">
              <XMarkIcon
                onClick={() => deleteItemFromCart(item.id)}
                className="h-8 w-8 cursor-pointer"
              />
              <ProductItem list={true} data={item} />
              <Counter
                itemCount={item.quantity}
                stock={item.stock}
                decrease={() => decrementItemQuantity(item.id)}
                increase={() => incrementItemQuantity(item.id)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <h3 className="my-0 tracking-wider md:text-xl">
            <strong>SUBTOTAL</strong>
          </h3>
          <p className="md:text-lg">${cartTotal.toFixed(2)}</p>
        </div>
        <Button onClick={checkout}>Checkout</Button>
      </div>
    </div>
  );
};

export default CartPage;
