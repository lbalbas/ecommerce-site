import Image from "next/image";
import Link from "next/link";
import type { ProductProps, Props } from "../utils/globalTypes";

const ProductItem = (props: ProductProps) => {
  const { item, price, thumbnail, id } = props.data;

  if (!props.list)
    return (
      <Link
        href={"/shop/" + id}
        className="group/item h-64 flex flex-col items-center"
      >
        <div className="relative h-36 w-36 md:h-[175px] md:w-[175px]">
          <Image className="rounded-2xl" alt={item} src={thumbnail} fill />
        </div>
        <p className="text-center font-bold lg:font-medium">{item}</p>
        <p className="text-center group-hover/item:block lg:hidden">${price}</p>
      </Link>
    );

  return (
    <div className="w-9/12 gap-4 grid grid-cols-3">
      <div className="h-full w-full">
        <Link href={"/shop/" + id} className="flex flex-col items-center">
          <Image
            className="rounded-2xl"
            alt={item}
            src={thumbnail}
            width={140}
            height={140}
          />
        </Link>
      </div>
      <div className="h-full w-full cols-span-2">
        <h2 className="text-xl font-bold">{item}</h2>
        <h3 className="">${price}</h3>
      </div>
    </div>
  );
};

export default ProductItem;
