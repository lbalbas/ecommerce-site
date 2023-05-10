import Image from "next/image";
import Link from "next/link";
import type { ProductProps, Props } from "../utils/globalTypes";

const ProductItem = (props: ProductProps) => {
  const { name, price, img, id } = props.data;

  if (!props.list)
    return (
      <Link
        href={"/shop/" + id}
        className="group lg:h-56 flex flex-col items-center"
      >
        <div className="relative h-36 w-36 md:h-[175px] md:w-[175px]">
          <Image className="rounded-2xl" alt={name} src={img} fill />
        </div>
        <p className="text-center font-bold lg:font-medium">{name}</p>
        <p className="text-center group-hover:block lg:hidden">${price}</p>
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
