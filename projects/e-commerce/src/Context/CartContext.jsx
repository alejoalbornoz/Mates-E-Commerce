import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Cargar carrito desde cookies al iniciar
  useEffect(() => {
    const userId = Cookies.get("userCartId") || "guest";
    const savedCart = Cookies.get(`cart_${userId}`);
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const saveToCookie = (items) => {
    const userId = Cookies.get("userCartId") || "guest";
    Cookies.set(`cart_${userId}`, JSON.stringify(items), { expires: 7 });
  };

  // Agregar producto al carrito (se pasa el producto completo)
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCart);
    saveToCookie(updatedCart);
  };

  // Remover una unidad del producto del carrito
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

  // Cambiar manualmente la cantidad de un producto
  const updateCartItemCount = (newAmount, id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newAmount } : item
    );
    setCartItems(updatedCart);
    saveToCookie(updatedCart);
  };

  // Obtener cantidad actual de un producto
  const getQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  // Calcular total
  const getTotalCartAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Vaciar carrito
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
