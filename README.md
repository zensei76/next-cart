

# Next.js E-commerce Project (Using Fake Store API)

This project is a fully functional e-commerce application built with Next.js and leverages the Fake Store API to provide product data.

## Features

- **Product Listing:** Browse through a catalog of products with details and images fetched from the Fake Store API.
- **Product Details:** View detailed information about individual products.
- **Shopping Cart:** Add and remove products from your cart, with quantity adjustments.
- **Cart Counter:** Update the cart's dedicated counter to reflect the number of added items.
- **Visual Feedback:** Provides visual feedback confirming the item's addition.
- **Checkout (Basic):** Initiate a basic checkout process.
- 
Going Above and Beyond
Error Handling
Error Handling for Invalid Quantity

To ensure the quantity of cart items never drops below 1, the following code is implemented:

```javascript

<button
  onClick={() =>
    updateQuantity(item.id, Math.max(1, item.quantity - 1)) // Prevent quantity from going below 1
  }
  className='bg-gray-300 px-2 py-1 rounded'
>
  Decrease Quantity
</button>
```

Explanation: This code utilizes Math.max(1, item.quantity - 1) to prevent the quantity from becoming negative or zero.
Error Handling for Discount Codes

Show toast notifications for valid and invalid discount codes:

```javascript

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
```

Explanation: Displays a green toast for successful discount application and a red toast for invalid codes, guiding the user accordingly.
Persistent Cart Storage

This project includes persistent cart storage using cookies. This allows the cart to retain its state across sessions without requiring user login. The following utility functions handle saving and retrieving the cart data using cookies.

Utility Functions (utils/cookies.js):

```javascript

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
```
How It Works:

Saving Cart Data: When the cart data changes, it is saved to a cookie using saveCartToCookie. The cookie persists for 7 days.
Retrieving Cart Data: When the application starts, it retrieves the cart data from the cookie using getCartFromCookie. If no cart data is found, it initializes an empty cart.

By including these functions, you ensure that the user's cart is maintained between sessions, providing a seamless shopping experience.

## Getting Started

### Installation

1. **Clone this repository:**

    ```bash
    git clone https://github.com/your-username/your-project-name.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd your-project-name
    ```

3. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

### Development Server

Start the development server to view your e-commerce application locally:

```bash
npm run dev
# or
yarn dev 
```

This will start the server and open your default browser at http://localhost:3000. Changes to your code will be automatically reflected in the browser.
Usage

    Visit http://localhost:3000 in your browser.
    Explore product categories and individual products.
    Add items to your cart and adjust quantities.
    Initiate a basic checkout flow (optional, depending on implementation).
    


Additional Notes

This project utilizes the Fake Store API for product data, providing a convenient way to test your e-commerce functionalities without managing real product data.
