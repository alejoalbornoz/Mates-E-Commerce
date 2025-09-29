// ✅ CartContext.js - modificado para normalizar id
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const userId = Cookies.get("userCartId") || "guest";
    const savedCart = Cookies.get(`cart_${userId}`);
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      const validatedCart = parsedCart.map((item) => ({
        ...item,
        quantity: item.quantity ?? 1,
        id: item.id || item._id, // 👈 Normaliza el ID
      }));
      setCartItems(validatedCart);
    }
  }, []);

  const saveToCookie = (items) => {
    const userId = Cookies.get("userCartId") || "guest";
    Cookies.set(`cart_${userId}`, JSON.stringify(items), { expires: 7 });
  };

  const getItemId = (item) => item.id || item._id;

  const addToCart = (product) => {
    const id = getItemId(product);
    const existingItem = cartItems.find((item) => getItemId(item) === id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map((item) =>
        getItemId(item) === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, id, quantity: 1 }];
    }

    setCartItems(updatedCart);
    saveToCookie(updatedCart);
  };

  const removeFromCart = (id) => {
    const existingItem = cartItems.find((item) => getItemId(item) === id);
    if (!existingItem) return;

    let updatedCart;
    if (existingItem.quantity > 1) {
      updatedCart = cartItems.map((item) =>
        getItemId(item) === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    } else {
      updatedCart = cartItems.filter((item) => getItemId(item) !== id);
    }

    setCartItems(updatedCart);
    saveToCookie(updatedCart);
  };

  const updateCartItemCount = (newAmount, id) => {
    const updatedCart = cartItems.map((item) =>
      getItemId(item) === id ? { ...item, quantity: newAmount } : item
    );
    setCartItems(updatedCart);
    saveToCookie(updatedCart);
  };

  const getQuantity = (id) => {
    const item = cartItems.find((item) => getItemId(item) === id);
    return item ? item.quantity : 0;
  };

  const getTotalCartAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const clearCart = () => {
    const userId = Cookies.get("userCartId") || "guest";
    setCartItems([]);
    Cookies.remove(`cart_${userId}`);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getQuantity,
        getTotalCartAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
