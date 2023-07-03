import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <div
      className="row-start-1 rounded-2xl md:col-start-2 md:col-end-4 md:row-span-2 overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex">
        <div className="relative h-full min-w-0 grow-0 shrink-0 basis-full">
          <Image
            priority={true}
            alt="Slider Text"
            src="/000000.png"
            width={760}
            height={400}
          />
          <div className="p-4 bottom-0 absolute text-xl bg-raisin bg-opacity-75 z-99 w-full h-16">
            <span className="text-ivory font-bold tracking-wider">
              Lorem Ipsum
            </span>
          </div>
        </div>
        <div className="relative h-full min-w-0 grow-0 shrink-0 basis-full">
          <Image
            priority={true}
            alt="Slider Text"
            src="/000000.png"
            width={760}
            height={400}
          />
          <div className="p-4 bottom-0 absolute text-xl bg-raisin bg-opacity-75 z-99 w-full h-16">
            <span className="text-ivory font-bold tracking-wider">Hello</span>
          </div>
        </div>
        <Link
          href="/shop"
          className="relative h-full min-w-0 grow-0 shrink-0 basis-full"
        >
          <Image
            priority={true}
            alt="Slider Text"
            src="/000000.png"
            width={760}
            height={400}
          />
          <div className="p-4 bottom-0 absolute text-xl bg-raisin bg-opacity-75 z-99 w-full h-16">
            <span className="text-ivory font-bold tracking-wider">
              Check out our new products.
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Carousel;
