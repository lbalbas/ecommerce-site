import { useRouter } from "next/router";

const ProductPage = () => {
	const router = useRouter();
	const { id } = router.query;

	return <p>Item: {id}</p>;
};

export default ProductPage;
