import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function CartItem({ data }) {
  const { _id, name, price, image, quantity, category } = data;
  const id = data.id || _id; // Asegura compatibilidad

  const { addToCart, removeFromCart, updateCartItemCount } =
    useContext(CartContext);

  return (
    <div className="cartItem">
      <img src={`http://localhost:4000${image}`} alt={name} />
      <div className="description">
        <p>
          <strong>{name}</strong>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            type="int"
            value={quantity ?? 1}
            min={1}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart({ ...data, id, category })}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
