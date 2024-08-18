
import Cookies from 'js-cookie';

export const saveCartToCookie = (cart) => {
  Cookies.set('cart', JSON.stringify(cart), { expires: 7 }); // Expires in 7 days
};

export const getCartFromCookie = () => {
  const cart = Cookies.get('cart');
  return cart ? JSON.parse(cart) : { items: [] }; 
};
