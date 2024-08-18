"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { CartProvider, useCart } from "./context/cartContext";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

function CartCount() {
	const { cart = [] } = useCart();
	const [itemCount, setItemCount] = useState(0);

	useEffect(() => {
		setItemCount(cart.reduce((total, item) => total + (item.quantity || 0), 0));
	}, [cart]);

	return <span>{itemCount}</span>;
}

function Layout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='min-h-screen flex flex-col'>
					<Header />

					<main className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
						{children}
						<Toaster position='top-center' />
					</main>
					<Footer />
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
