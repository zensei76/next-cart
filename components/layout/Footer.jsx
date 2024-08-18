"use client";

export default function Footer() {
  return (
    <footer className='bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <p className='text-center text-base text-gray-400'>
          &copy; {new Date().getFullYear()} Next.js E-commerce. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
