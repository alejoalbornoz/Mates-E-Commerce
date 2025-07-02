import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Shop.css";  // Importar CSS normal

export const Product = ({ product }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const cartItemAmount = cartItems[product.id] || 0;

  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <div className="descriptionn">
        <p>
          <b>{product.name}</b>
        </p>
        <p>${product.price}</p>
      </div>
      <button
        className="addToCartBttn"
        onClick={() => addToCart(product)}
      >
        Agregar al carrito {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
