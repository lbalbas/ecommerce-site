import { Inter } from "next/font/google";
import FeaturedItems from "@/components/FeaturedItems";
import { useEffect } from "react";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { checkOut } = useCart();
  useEffect(() => {
    switch (router.query.checkoutSuccess) {
      case "true": {
        checkOut();
        toast.success("Checkout Successful", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        break;
      }
      case "false": {
        toast.error("Checkout Failed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        break;
      }
    }
  }, [router.query.checkoutSuccess, checkOut]);

  return (
    <div className="flex gap-10 flex-col animate-fade-in">
      <Head>
        <title>Ecommerce</title>
      </Head>
      
      {/* Hero Section */}
      <section className="relative w-full rounded-3xl overflow-hidden shadow-premium bg-gradient-primary p-1">
        <div className="bg-ivory/90 backdrop-blur-xl rounded-[1.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
          <div className="flex-1 space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-extrabold text-raisin tracking-tight">
              Discover <br/><span className="text-transparent bg-clip-text bg-gradient-primary">Premium</span> Quality
            </h1>
            <p className="text-lg text-raisin/70 max-w-md">
              Elevate your lifestyle with our curated collection of top-tier products.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/shop" className="px-8 py-3 bg-raisin text-white rounded-full font-semibold hover:bg-trueblue transition-colors duration-300 shadow-lg">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full relative">
             <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-glass border border-white/50">
               <Image src="/all-products.jpg" alt="Hero Featured" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
               <div className="absolute inset-0 bg-gradient-to-tr from-trueblue/20 to-transparent"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Categories & Carousel */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 md:col-span-1">
          <Link
            className="group relative w-full h-[200px] flex rounded-2xl justify-center items-center overflow-hidden shadow-glass hover:shadow-premium transition-all duration-300"
            href="/departments"
          >
            <Image
              alt="Departments"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              src="/departments.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-raisin/80 via-raisin/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <span className="absolute bottom-6 left-6 text-2xl tracking-widest uppercase font-bold text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              Departments
            </span>
          </Link>
          <Link
            className="group relative w-full h-[200px] flex rounded-2xl justify-center items-center overflow-hidden shadow-glass hover:shadow-premium transition-all duration-300"
            href="/shop"
          >
            <Image
              alt="Products"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              src="/all-products.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-trueblue/80 via-trueblue/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <span className="absolute bottom-6 left-6 text-2xl tracking-widest uppercase font-bold text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              All Products
            </span>
          </Link>
        </div>
        
        {/* Carousel Container */}
        <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-glass relative bg-white border border-ivory">
          <Carousel />
        </div>
      </section>

      <section className="py-8">
        <FeaturedItems />
      </section>
    </div>
  );
}
