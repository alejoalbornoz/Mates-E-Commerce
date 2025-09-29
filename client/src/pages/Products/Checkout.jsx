import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Checkout.css";

function Checkout() {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    paymentMethod: "",
  });

  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:4000/api/orders",
        {
          ...formData,
          items: cartItems,
          total: totalAmount,
        },
        { withCredentials: true }
      );
      clearCart();
      navigate("/gracias");
    } catch (error) {
      console.log("Error al crear la orden:", error);
    }
  };

  return (
    <div className="checkout-wrapper">
      <form className="checkout-card" onSubmit={handleSubmit}>
        <h2>Finalizar compra</h2>

        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input
            name="name"
            type="text"
            placeholder="Tu nombre"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Dirección</label>
          <textarea
            name="address"
            placeholder="Tu dirección"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">Ciudad</label>
            <input
              name="city"
              type="text"
              placeholder="Ciudad"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="state">Provincia</label>
            <input
              name="state"
              type="text"
              placeholder="Provincia"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="zip">Código Postal</label>
            <input
              name="zip"
              type="text"
              placeholder="C.P."
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">País</label>
            <select name="country" onChange={handleChange} required>
              <option value="">Seleccionar país</option>
              <option value="AR">Argentina</option>
              <option value="UY">Uruguay</option>
              <option value="CL">Chile</option>
              <option value="PY">Paraguay</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="paymentMethod">Método de pago</label>
          <select
            name="paymentMethod"
            onChange={handleChange}
            required
            value={formData.paymentMethod}
          >
            <option value="">Seleccionar método</option>
            <option value="tarjeta">Tarjeta de crédito/débito</option>
            <option value="mercadopago">MercadoPago</option>
            <option value="efectivo">Efectivo contra entrega</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit">Confirmar pedido</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
