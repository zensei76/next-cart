import { Suspense } from "react";
import ProductGrid from "../components/ProductGrid";


async function getProducts() {

	
	const domain = process.env.BASE_URL || "http://localhost:3000"
	console.log('Fetched BASE_URL:', domain); 
	
	const res = await fetch(`${domain}/api/products`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch products");
	}
	return res.json();
}

export default async function Home() {
	const products = await getProducts();

	return (
		<>
			<h1 className='text-3xl font-bold mb-8'>Our Products</h1>
			<ProductGrid products={products} />
		</>
	);
}
