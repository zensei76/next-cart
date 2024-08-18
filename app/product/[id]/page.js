import { Suspense } from "react";
import AddToCartButton from "../../../components/AddToCartButton";
import Image from "next/image";

async function getProduct(id) {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch product");
	}
	return res.json();
}

export default async function ProductPage({ params }) {
	const product = await getProduct(params.id);

	return (
		<div className='flex flex-col md:flex-row gap-8'>
			<div className='md:w-1/2 h-[500px]'>
				<Image
					width={500}
					height={500}
					style={{ objectFit: "contain" }}
					src={product.image}
					alt={product.title}
					className='w-full h-full object-contain'
				/>
			</div>
			<div className='md:w-1/2'>
				<h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
				<p className='text-gray-600 mb-4'>{product.description}</p>
				<p className='text-2xl font-bold mb-4'>${product.price.toFixed(2)}</p>
				<Suspense fallback={<div>Loading...</div>}>
					<AddToCartButton product={product} variant='default' />
				</Suspense>
			</div>
		</div>
	);
}
