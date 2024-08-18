// CartProvider component
import { createContext, useContext, useState, useEffect } from 'react';
import { saveCartToCookie, getCartFromCookie } from '../utils/cookies';

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(getCartFromCookie()); // cart should initially be an object with items

  useEffect(() => {
    saveCartToCookie(cart);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          items: prevCart.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...prevCart.items, { ...product, quantity: 1 }] };
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => ({
      items: prevCart.items.filter((item) => item.id !== productId),
    }));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1 || isNaN(newQuantity)) return;
    setCart((prevCart) => ({
      items: prevCart.items.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ),
    }));
  };

  return (
    <CartContext.Provider value={{ cart: cart.items, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
