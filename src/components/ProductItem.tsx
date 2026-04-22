import Image from "next/image";
import Link from "next/link";
import type { ProductProps, Props } from "../utils/globalTypes";

const ProductItem = (props: ProductProps) => {
  const { item, price, thumbnail, id } = props.data;

  if (!props.list)
    return (
      <Link
        href={"/shop/" + id}
        className="group/item flex flex-col items-center gap-3 py-2"
      >
        <div className="relative aspect-square w-36 md:w-[175px] rounded-2xl overflow-hidden bg-white shadow-sm">
          <Image
            className="object-cover"
            alt={item}
            src={thumbnail}
            fill
            sizes="(max-width: 768px) 144px, 175px"
          />
        </div>
        <p className="text-center font-bold lg:font-medium">{item}</p>
        <p className="text-center group-hover/item:block lg:hidden">${price}</p>
      </Link>
    );

  return (
    <div className="w-9/12 gap-4 grid grid-cols-3">
      <div className="h-full flex items-center w-full">
        <Link href={"/shop/" + id} className="flex flex-col items-center">
          <div className="relative aspect-square w-[140px] rounded-2xl overflow-hidden bg-white shadow-sm">
            <Image
              className="object-cover"
              alt={item}
              src={thumbnail}
              fill
              sizes="140px"
            />
          </div>
        </Link>
      </div>
      <div className="h-full w-full col-span-2">
        <h2 className="md:text-lg font-bold">{item}</h2>
        <h3 className="">${price}</h3>
      </div>
    </div>
  );
};
export default ProductItem;
