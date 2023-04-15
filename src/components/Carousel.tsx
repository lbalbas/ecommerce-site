import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
				<div className="bg-orange-50 h-80 min-w-0 grow-0 shrink-0 basis-full">
					Slide 1
				</div>
				<div className="bg-cyan-50 h-80 min-w-0 grow-0 shrink-0 basis-full">
					Slide 2
				</div>
				<div className="bg-amber-50 h-80 min-w-0 grow-0 shrink-0 basis-full">
					Slide 3
				</div>
			</div>
		</div>
	);
};

export default Carousel;
