import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../../Context/shop-context";
import { PRODUCTS } from "../../../data/products";
import CartItem from "./Cart-item";
import "./Cart.css";

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h2>Tu carrito de productos</h2>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/productos")}> Continuar comprando </button>
          <button>Comprar</button>
        </div>
      ) : (
        <h2> Tu carrito se encuentra vacio </h2>
      )}
    </div>
  );
}
