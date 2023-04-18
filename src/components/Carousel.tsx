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
			className="row-start-1 rounded-2xl md:col-start-2 md:col-end-4 row-span-2 overflow-hidden"
			ref={emblaRef}
		>
			<div className="flex">
				<div className="relative bg-orange-50 h-80 min-w-0 grow-0 shrink-0 basis-full">
					<Image
						alt="Slider Text"
						src="/placeimg_720_720_any.jpeg"
						fill
					/>
					<div className="opacity-50 p-4 bottom-0 absolute text-xl bg-red-100 z-99 w-full h-16">
						<span className="opacity-100">Hello</span>
					</div>
				</div>
				<div className="relative bg-orange-50 h-80 min-w-0 grow-0 shrink-0 basis-full">
					<Image
						alt="Slider Text"
						src="/placeimg_720_720_any.jpeg"
						fill
					/>
					<div className="opacity-50 p-4 bottom-0 absolute text-xl bg-red-100 z-99 w-full h-16">
						<span className="opacity-100">Hello</span>
					</div>
				</div>
				<div className="relative bg-orange-50 h-80 min-w-0 grow-0 shrink-0 basis-full">
					<Image
						alt="Slider Text"
						src="/placeimg_720_720_any.jpeg"
						fill
					/>
					<div className="opacity-50 p-4 bottom-0 absolute text-xl bg-red-100 z-99 w-full h-16">
						<span className="opacity-100">Hello</span>
					</div>
				</div>{" "}
			</div>
		</div>
	);
};

export default Carousel;
