import Head from "next/head";
import { useCart } from "../context/CartContext";
import ProductItem from "@/components/ProductItem";
import Counter from "@/components/ItemCounter";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Button from "@/components/Button";
import { loadStripe } from "@stripe/stripe-js";
import { CartProduct } from "@/utils/globalTypes";

const transformItems = (items: CartProduct[]) => {
  return items.map((item) => ({
    price_data: {
      currency: "usd",
      unit_amount: parseFloat(item.price) * 100,
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
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
      console.error("Stripe public key is not defined in env variables");
      return;
    }
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    const transfItems = transformItems(itemsOnCart);
    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ transfItems }),
    });
    if (!stripe) {
      console.error("Failed to initialize Stripe");
      return;
    }
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };
  return (
    <div className="w-full grid gap-8 md:gap-8 md:grid-cols-3 animate-fade-in pb-12">
      <Head>
        <title>Your Shopping Cart</title>
      </Head>
      <div className="max-h-[60vh] md:max-h-[75vh] flex md:col-span-2 gap-6 flex-col overflow-y-auto pr-2 custom-scrollbar">
        {
          itemsOnCart.length === 0 && (
            <div className="h-[60vh] flex flex-col items-center justify-center gap-6 glass-card p-8 text-center">
              <div className="w-24 h-24 rounded-full bg-vanilla/30 flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-raisin/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-raisin tracking-tight">Your cart is empty</h3>
              <p className="text-raisin/70">Looks like you haven't added anything to your cart yet.</p>
              <Button onClick={() => window.location.href = '/shop'} className="mt-4">Start Shopping</Button>
            </div>
          )
        }
        {itemsOnCart.map((item) => {
          const itemInCart = itemsOnCart.find(
            (cartItem) => cartItem.id === item.id
          );
          const itemInCartQuantity = itemInCart ? itemInCart.quantity : 0;
          return (
            <div key={item.id} className="flex flex-col sm:flex-row gap-4 items-center justify-between glass-card p-4 hover:shadow-premium transition-shadow duration-300 group">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => deleteItemFromCart(item.id)}
                  className="p-2 text-raisin/40 hover:text-jasper hover:bg-jasper/10 rounded-full transition-colors duration-200"
                  aria-label="Remove item"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
                <div className="flex-1">
                  <ProductItem list={true} data={item} />
                </div>
              </div>
              <div className="w-full sm:w-auto flex justify-end">
                <div className="bg-white/50 rounded-xl p-1 shadow-sm">
                  <Counter
                    itemCount={item.quantity}
                    stock={item.stock}
                    decrease={() => decrementItemQuantity(item.id)}
                    increase={() => incrementItemQuantity(item.id)}
                    itemInCartQuantity={itemInCartQuantity}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Order Summary Sticky Sidebar */}
      {itemsOnCart.length > 0 && (
        <div className="md:col-span-1 h-fit sticky top-24">
          <div className="glass-card p-8 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-raisin border-b border-raisin/10 pb-4">Order Summary</h2>
            
            <div className="flex flex-col gap-3 text-raisin/80">
              <div className="flex justify-between items-center">
                <span>Subtotal ({itemsOnCart.length} items)</span>
                <span className="font-semibold text-raisin">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t border-raisin/10 pt-4 flex justify-between items-center">
              <span className="text-lg font-bold text-raisin">Total</span>
              <span className="text-2xl font-extrabold text-trueblue">${cartTotal.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={checkout}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-trueblue to-powderblue hover:opacity-90 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Proceed to Checkout
            </button>
            <p className="text-xs text-center text-raisin/50 mt-2">Secure checkout powered by Stripe</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
