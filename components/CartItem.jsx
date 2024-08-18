import Image from "next/image";
import { useCart } from "@/app/context/cartContext";

export default function CartItem({ item }) {
	const { removeFromCart, updateQuantity } = useCart();

	return (
		<div className='flex items-center border-b py-4'>
			<Image
				width={100}
				height={100}
				src={item.image}
				alt={item.title}
				className='w-20 h-20 object-contain mr-4'
			/>
			<div className='flex-grow'>
				<h3 className='text-lg font-semibold'>{item.title}</h3>
				<p className='text-gray-600'>${item.price.toFixed(2)}</p>
				<div className='flex items-center mt-2'>
					<button
						onClick={
							() => updateQuantity(item.id, Math.max(1, item.quantity - 1)) // Handle invalid quantity never goes below 1
						}
						className='bg-gray-300 px-2 py-1 rounded'
					>
						-
					</button>
					<span className='mx-2'>{item.quantity}</span>
					<button
						onClick={() => updateQuantity(item.id, item.quantity + 1)}
						className='bg-gray-300 px-2 py-1 rounded'
					>
						+
					</button>
				</div>
			</div>
			<button
				onClick={() => removeFromCart(item.id)}
				className='text-red-600 hover:text-red-800'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					class='size-6'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
					/>
				</svg>
			</button>
		</div>
	);
}
