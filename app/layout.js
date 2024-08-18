'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { CartProvider, useCart } from './context/cartContext';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

function CartCount() {
  const { cart } = useCart();
  return <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>;
}

function Layout( { children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <Link href="/" className="text-2xl font-bold text-gray-900">Store</Link>
                <nav className="hidden md:flex space-x-10">
                  <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Home</Link>
                  <Link href="/products" className="text-base font-medium text-gray-500 hover:text-gray-900">All Products</Link>
                </nav>
                <Link href="/cart" className="group -m-2 p-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 group-hover:text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">Cart (<CartCount />)</span>
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
            <Toaster position="top-center" />
          </main>

          <footer className="bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <p className="text-center text-base text-gray-400">&copy; {new Date().getFullYear()} Next.js E-commerce. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <Layout>{children}</Layout>
    </CartProvider>
  );
}