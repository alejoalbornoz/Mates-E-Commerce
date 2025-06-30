import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function CartItem({ data }) {
  const { id, name, price, productImage, quantity } = data;
  const { addToCart, removeFromCart, updateCartItemCount } =
    useContext(CartContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt={name} />
      <div className="description">
        <p>
          <strong>{name}</strong>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
