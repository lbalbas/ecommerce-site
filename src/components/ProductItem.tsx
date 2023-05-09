import Image from "next/image";
import Link from "next/link";
import type { ProductProps, Props } from "../utils/globalTypes";

const ProductItem = (props: ProductProps) => {
  const { name, price, img, id } = props.data;

  if (!props.list)
    return (
      <Link
        href={"/shop/" + id}
        className="group h-44 flex flex-col items-center"
      >
        <Image
          className="rounded-2xl"
          alt={name}
          src={img}
          width={175}
          height={175}
        />
        <p className="text-center">{name}</p>
        <p className="text-center group-hover:block hidden">${price}</p>
      </Link>
    );

  return (
    <div className="w-9/12 gap-4 h-44 grid grid-cols-3">
      <div className="h-full w-full">
        <Link
          href={"/shop/" + id}
          className="group relative h-44 flex flex-col items-center"
        >
          <Image className="rounded-2xl" alt={name} src={img} fill />
        </Link>
      </div>
      <div className="h-full w-full cols-span-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <h3 className="">${price}</h3>
      </div>
    </div>
  );
};

export default ProductItem;
