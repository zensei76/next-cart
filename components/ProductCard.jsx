"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/cartContext";

export default function ProductCard({ product }) {
	const { addToCart } = useCart();
	const [isAdded, setIsAdded] = useState(false);

	const handleAddToCart = () => {
		console.log("in add to cart");
		addToCart(product);
		setIsAdded(true);
		setTimeout(() => setIsAdded(false), 2000);
	};

	return (
		<div className='group relative flex flex-col h-[500px]'>
			{" "}
			{/* Set a fixed height */}
			<div className='w-full h-64 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75'>
				<Link href={`/product/${product.id}`} className='block h-full'>
					<div className='relative w-full h-full'>
						<Image
							src={product.image}
							alt={product.title}
							layout='fill'
							objectFit='contain'
							className='w-full h-full object-center'
						/>
					</div>
				</Link>
			</div>
			<div className='mt-4 flex-grow flex flex-col justify-between'>
				<div>
					<h3 className='text-sm text-gray-700 line-clamp-2'>
						{" "}
						{/* Limit title to 2 lines */}
						<Link href={`/product/${product.id}`}>
							<span aria-hidden='true' className='absolute inset-0' />
							{product.title}
						</Link>
					</h3>
					<p className='mt-1 text-sm text-gray-500'>{product.category}</p>
				</div>
				<div>
					<p className='text-sm font-medium text-gray-900'>
						${product.price.toFixed(2)}
					</p>
					<button
						onClick={handleAddToCart}
						className={`mt-4 w-full absolute bottom-0 ${
							isAdded ? "bg-green-800" : "bg-gray-800"
						} border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
					>
						{isAdded ? "Added to Cart" : "Add to Cart"}
					</button>
				</div>
			</div>
		</div>
	);
}
