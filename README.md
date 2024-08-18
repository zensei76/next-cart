# Next.js E-commerce Project

This is a Next.js project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 with your browser to see the result.

Going Above and Beyond
Error Handling

I implemented robust error handling for invalid quantity inputs and discount codes:
Error Handling for Invalid Quantity

Ensure the quantity of cart items never drops below 1:

javascript

<button
  onClick={() =>
    updateQuantity(item.id, Math.max(1, item.quantity - 1)) // Prevent quantity from going below 1
  }
  className='bg-gray-300 px-2 py-1 rounded'
>
  Decrease Quantity
</button>

Explanation: Uses Math.max(1, item.quantity - 1) to ensure the quantity stays at least 1, preventing invalid values.
Error Handling for Discount Codes

Show toast notifications for valid and invalid discount codes:

javascript

const applyDiscount = () => {
  if (discountCode === "SAVE10") {
    toast("Discount applied successfully!", {
      classNames: {
        toast: 'bg-green-500',
        title: 'text-xl',
      },
    });
    setDiscount(subtotal * 0.1);
  } else {
    toast(`Invalid discount code, try "SAVE10"`, {
      classNames: {
        toast: 'bg-red-500',
        title: 'text-xl',
      },
    });
    setDiscount(0);
  }
};

Explanation: Displays a green toast for successful discount application and a red toast for invalid codes, guiding the user accordingly.
Persistent Cart Storage

This project includes persistent cart storage using cookies. This allows the cart to retain its state across sessions without requiring user login. The following utility functions handle saving and retrieving the cart data using cookies.

Utility Functions (utils/cookies.js):

javascript

import Cookies from 'js-cookie';

/**
 * Save the cart data to a cookie.
 * @param {Object} cart - The cart data to save.
 */
export const saveCartToCookie = (cart) => {
  Cookies.set('cart', JSON.stringify(cart), { expires: 7 }); // Persist for 7 days
};

/**
 * Retrieve the cart data from a cookie.
 * @returns {Object} - The cart data.
 */
export const getCartFromCookie = () => {
  const cart = Cookies.get('cart');
  return cart ? JSON.parse(cart) : { items: [] }; // Default to empty cart
};

How It Works:

    Saving Cart Data: When the cart data changes, it is saved to a cookie using saveCartToCookie. The cookie persists for 7 days.
    Retrieving Cart Data: When the application starts, it retrieves the cart data from the cookie using getCartFromCookie. If no cart data is found, it initializes an empty cart.

By including these functions, you ensure that the user's cart is maintained between sessions, providing a seamless shopping experience.
