import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Shop.css";

export const Product = ({ product }) => {
  const { addToCart, getQuantity } = useContext(CartContext);
  const cartItemAmount = getQuantity(product.id);

  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <div className="descriptionn">
        <p><b>{product.name}</b></p>
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
