import {
	ArrowSmallRightIcon,
	ArrowSmallLeftIcon,
} from "@heroicons/react/24/solid";

interface PaginationProps {
	handleNext: () => void,
	handlePrevious: () => void,
	totalPages: number,
	currentPage: number,
}

const Pagination = (props: PaginationProps) => {
	return (
		<div className="flex justify-center gap-2 items-center">
			<button disabled={props.currentPage <= 0} onClick={props.handlePrevious}>
				<ArrowSmallLeftIcon className="h-6 w-6" />
			</button>
			<span>Page {`${props.currentPage + 1} of ${props.totalPages}`}</span>
			<button disabled={props.currentPage + 1 >= props.totalPages} onClick={props.handleNext}>
				<ArrowSmallRightIcon className="h-6 w-6" />
			</button>
		</div>
		)
}

export default Pagination;