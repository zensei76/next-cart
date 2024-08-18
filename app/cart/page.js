"use client";

import { useState } from "react";
import { useCart } from "../context/cartContext";
import CartItem from "../../components/CartItem";
import { toast } from "sonner";

export default function Cart() {
	const { cart } = useCart();
	const [discountCode, setDiscountCode] = useState("");
	const [discount, setDiscount] = useState(0);

	const subtotal = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);
	const total = subtotal - discount;

	const applyDiscount = () => {
		if (discountCode === "SAVE10") {
			toast("Discount applied successfully!",{classNames: {
				toast: 'bg-green-500',
				title: ' text-xl',
			  },});
			setDiscount(subtotal * 0.1);
		} else { //Error handling for scenarios like invalid quantity input or discount codes.
			toast(`Invalid discount code , try "SAVE10"`,{classNames:  {
				toast: 'bg-red-500',
				title: ' text-xl',
			},});
			setDiscount(0);
		}
	};

	return (
		<>
			<h1 className='text-3xl font-bold mb-8'>Your Cart</h1>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='md:col-span-2'>
						{cart.map((item) => (
							<CartItem key={item.id} item={item} />
						))}
					</div>
					<div className='bg-gray-100 p-4 rounded'>
						<h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
						<div className='flex justify-between mb-2'>
							<span>Subtotal:</span>
							<span>${subtotal.toFixed(2)}</span>
						</div>
						<div className='flex justify-between mb-2'>
							<span>Discount:</span>
							<span>-${discount.toFixed(2)}</span>
						</div>
						<div className='flex justify-between font-bold text-lg mb-4'>
							<span>Total:</span>
							<span>${total.toFixed(2)}</span>
						</div>
						<div className='mb-4'>
							<input
								type='text'
								value={discountCode}
								onChange={(e) => setDiscountCode(e.target.value)}
								placeholder='Enter discount code'
								className='w-full p-2 border rounded'
							/>
							<button
								onClick={applyDiscount}
								className='w-full mt-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors'
							>
								Apply Discount
							</button>
						</div>
						<button className='w-full bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors'>
							Proceed to Checkout
						</button>
					</div>
				</div>
			)}
		</>
	);
}
