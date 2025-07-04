import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function CartItem({ data }) {
  const { id, name, price, image, quantity } = data;
  const { addToCart, removeFromCart, updateCartItemCount } = useContext(CartContext);

  return (
    <div className="cartItem">
      <img src={image} alt={name} />
      <div className="description">
        <p><strong>{name}</strong></p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(data)}>+</button> 
        </div>
      </div>
    </div>
  );
}
