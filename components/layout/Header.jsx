"use client";

import { useCart } from "@/app/context/cartContext";
import Link from "next/link";

import { useEffect, useState } from "react";

function CartCount() {
  const { cart = [] } = useCart();
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(cart.reduce((total, item) => total + (item.quantity || 0), 0));
  }, [cart]);

  return <span>{itemCount}</span>;
}

export default function Header() {
  return (
    <header className='border-b'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-6'>
          <Link href='/' className='text-2xl font-bold text-gray-900'>
            Store
          </Link>
          <nav className='hidden md:flex space-x-10'>
            <Link href='/' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Home
            </Link>
            <Link href='/products' className='text-base font-medium text-gray-500 hover:text-gray-900'>
              All Products
            </Link>
          </nav>
          <Link href='/cart' className='group -m-2 p-2 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='grey'
              className='size-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
              />
            </svg>

            <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
              Cart (<CartCount />)
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
