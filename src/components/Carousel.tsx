import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

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
          <Image alt="Slider Text" src="/000000.png" width={760} height={400} />
          <div className="p-4 bottom-0 absolute text-xl bg-raisin bg-opacity-75 z-99 w-full h-16">
            <span className="text-ivory font-bold tracking-wider">Hello1</span>
          </div>
        </div>
        <div className="relative h-full min-w-0 grow-0 shrink-0 basis-full">
          <Image alt="Slider Text" src="/000000.png" width={760} height={400} />
          <div className="p-4 bottom-0 absolute text-xl bg-raisin bg-opacity-75 z-99 w-full h-16">
            <span className="text-ivory font-bold tracking-wider">Hello1</span>
          </div>
        </div>
        <div className="relative h-full min-w-0 grow-0 shrink-0 basis-full">
          <Image alt="Slider Text" src="/000000.png" width={760} height={400} />
          <div className="p-4 bottom-0 absolute text-xl bg-raisin bg-opacity-75 z-99 w-full h-16">
            <span className="text-ivory font-bold tracking-wider">Hello1</span>
          </div>
        </div>
      </div>
    </div>
  );
};
/*

        <div className="relative h-full md:h-80 lg:h-[50vh]  max-h-[450px] min-w-0 grow-0 shrink-0 basis-full">
          <Image alt="Slider Text" src="/placeimg_720_720_any.jpeg" fill />
          <div className="p-4 bottom-0 absolute text-xl bg-raisin bg-opacity-75 z-99 w-full h-16">
            <span className="text-ivory font-bold tracking-wider">Hello2</span>
          </div>
        </div>
        <div className="relative h-full md:h-80 lg:h-[50vh]  max-h-[450px] min-w-0 grow-0 shrink-0 basis-full">
          <Image alt="Slider Text" src="/placeimg_720_720_any.jpeg" fill />
          <div className="p-4 bottom-0 absolute text-xl bg-raisin bg-opacity-75 z-99 w-full h-16">
            <span className="text-ivory font-bold tracking-wider">Hello3</span>
          </div>
        </div>
*/
export default Carousel;
