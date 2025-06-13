import React, { useContext } from "react";
import { ShopContext } from "../../../Context/shop-context";






export default function CartItem(props) {
  const { id, name, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <strong>{name}</strong>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={()=> removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value))}/>
          <button onClick={()=> addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
