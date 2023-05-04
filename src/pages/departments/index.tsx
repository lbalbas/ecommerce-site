import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Departments = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Departments</title>
      </Head>
      <h3 className="tracking-widest text-lg uppercase font-bold text-raisin my-4">
        Departments
      </h3>
      <div className="grid w-full grid-cols-3 gap-6">
        <Link
          className="relative w-full h-full flex rounded-2xl justify-center items-center"
          href="/departments/electronics"
        >
          <Image
            alt="Departments"
            className="rounded-2xl"
            width={290}
            height={100}
            src="/placeimg_720_720_any.jpeg"
          />
          <div className="absolute rounded-2xl bg-raisin opacity-50 w-full h-full flex items-center justify-center"></div>
          <span className="absolute text-ivory uppercase¿ font-bold">
            Electronics
          </span>
        </Link>
        <Link
          className="relative w-full h-full flex rounded-2xl justify-center items-center"
          href="/departments/clothing"
        >
          <Image
            alt="Departments"
            className="rounded-2xl"
            width={290}
            height={100}
            src="/placeimg_720_720_any.jpeg"
          />
          <div className="absolute rounded-2xl bg-raisin opacity-50 w-full h-full flex items-center justify-center"></div>
          <span className="absolute text-ivory uppercase¿ font-bold">
            Clothing
          </span>
        </Link>
        <Link
          className="relative w-full h-full flex rounded-2xl justify-center items-center"
          href="/departments/accesories"
        >
          <Image
            alt="Departments"
            className="rounded-2xl"
            width={290}
            height={100}
            src="/placeimg_720_720_any.jpeg"
          />
          <div className="absolute rounded-2xl bg-raisin opacity-50 w-full h-full flex items-center justify-center"></div>
          <span className="absolute text-ivory uppercase¿ font-bold">
            Accesories
          </span>
        </Link>
        <Link
          className="relative w-full h-full flex rounded-2xl justify-center items-center"
          href="/departments/home&kitchen"
        >
          <Image
            alt="Departments"
            className="rounded-2xl"
            width={290}
            height={100}
            src="/placeimg_720_720_any.jpeg"
          />
          <div className="absolute rounded-2xl bg-raisin opacity-50 w-full h-full flex items-center justify-center"></div>
          <span className="absolute text-ivory uppercase¿ font-bold">
            Home & Kitchen
          </span>
        </Link>
        <Link
          className="relative w-full h-full flex rounded-2xl justify-center items-center"
          href="/departments/health&beauty"
        >
          <Image
            alt="Departments"
            className="rounded-2xl"
            width={290}
            height={100}
            src="/placeimg_720_720_any.jpeg"
          />
          <div className="absolute rounded-2xl bg-raisin opacity-50 w-full h-full flex items-center justify-center"></div>
          <span className="absolute text-ivory uppercase¿ font-bold">
            Health & Beauty
          </span>
        </Link>
        <Link
          className="relative w-full h-full flex rounded-2xl justify-center items-center"
          href="/departments/toys&games"
        >
          <Image
            alt="Departments"
            className="rounded-2xl"
            width={290}
            height={100}
            src="/placeimg_720_720_any.jpeg"
          />
          <div className="absolute rounded-2xl bg-raisin opacity-50 w-full h-full flex items-center justify-center"></div>
          <span className="absolute text-ivory uppercase¿ font-bold">
            Toys & Games
          </span>
        </Link>
        <Link
          className="relative w-full h-full flex rounded-2xl justify-center items-center"
          href="/departments/sports&outdoors"
        >
          <Image
            alt="Departments"
            className="rounded-2xl"
            width={290}
            height={100}
            src="/placeimg_720_720_any.jpeg"
          />
          <div className="absolute rounded-2xl bg-raisin opacity-50 w-full h-full flex items-center justify-center"></div>
          <span className="absolute text-ivory uppercase¿ font-bold">
            Sports & Outdoors
          </span>
        </Link>
        <Link
          className="relative w-full h-full flex rounded-2xl justify-center items-center"
          href="/departments/books&media"
        >
          <Image
            alt="Departments"
            className="rounded-2xl"
            width={290}
            height={100}
            src="/placeimg_720_720_any.jpeg"
          />
          <div className="absolute rounded-2xl bg-raisin opacity-50 w-full h-full flex items-center justify-center"></div>
          <span className="absolute text-ivory uppercase¿ font-bold">
            Books & Media
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Departments;
