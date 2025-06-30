import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import style from "./shop.module.css";

export const Product = (props) => {
  const { id, name, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(CartContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className={style.product}>
      <img src={productImage} alt="" />
      <div className={style.description}>
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className={style.addToCartBttn} onClick={() => addToCart(id)}>
        Agregar al carrito {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
