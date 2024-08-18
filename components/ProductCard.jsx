"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/cartContext";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }) {
	const { addToCart } = useCart();
	const [isAdded, setIsAdded] = useState(false);

	const handleAddToCart = () => {
		addToCart(product);
		setIsAdded(true);
		setTimeout(() => setIsAdded(false), 2000);
	};

	return (
		<div className='group relative flex flex-col h-[500px]  bg-gray-200'>
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
				</div>
			</div>
			<AddToCartButton product={product} variant="fullWidth" />
		</div>
	);
}
