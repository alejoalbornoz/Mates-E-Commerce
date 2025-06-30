import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import CartItem from "./Cart-item";
import "./Cart.css";

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(CartContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h2>Tu carrito de productos</h2>
      </div>

      <div className="cartItems">
        {cartItems.length > 0 ? (
          cartItems.map((product) => <CartItem key={product.id} data={product} />)
        ) : (
          <h2> Tu carrito se encuentra vacío </h2>
        )}
      </div>

      {totalAmount > 0 && (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/productos")}>
            Continuar comprando
          </button>
          <button>Comprar</button>
        </div>
      )}
    </div>
  );
}
