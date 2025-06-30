import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { PRODUCTS } from "../data/products";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = Cookies.get("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const saveToCookie = (items) => {
    Cookies.set("cart", JSON.stringify(items), { expires: 7 });
  };

  const addToCart = (id) => {
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return;

    const existingItem = cartItems.find((item) => item.id === id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCart);
    saveToCookie(updatedCart);
  };

  const removeFromCart = (id) => {
    const existingItem = cartItems.find((item) => item.id === id);
    if (!existingItem) return;

    let updatedCart;
    if (existingItem.quantity > 1) {
      updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    } else {
      updatedCart = cartItems.filter((item) => item.id !== id);
    }

    setCartItems(updatedCart);
    saveToCookie(updatedCart);
  };

  const updateCartItemCount = (newAmount, id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newAmount } : item
    );
    setCartItems(updatedCart);
    saveToCookie(updatedCart);
  };

  const getQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const getTotalCartAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const clearCart = () => {
    setCartItems([]);
    Cookies.remove("cart");
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
