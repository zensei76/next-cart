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
						onClick={() =>
							updateQuantity(item.id, Math.max(1, item.quantity - 1))
						}
						className='bg-gray-200 px-2 py-1 rounded'
					>
						-
					</button>
					<span className='mx-2'>{item.quantity}</span>
					<button
						onClick={() => updateQuantity(item.id, item.quantity + 1)}
						className='bg-gray-200 px-2 py-1 rounded'
					>
						+
					</button>
				</div>
			</div>
			<button
				onClick={() => removeFromCart(item.id)}
				className='text-red-600 hover:text-red-800'
			>
				Remove
			</button>
		</div>
	);
}
