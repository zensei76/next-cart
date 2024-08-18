"use client";

import { useCart } from "@/app/context/cartContext";

export default function AddToCartButton({ product }) {
	const { addToCart } = useCart();

	return (
		<button
			onClick={() => addToCart(product)}
			className='bg-gray-800 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors'
		>
			Add to Cart
		</button>
	);
}
