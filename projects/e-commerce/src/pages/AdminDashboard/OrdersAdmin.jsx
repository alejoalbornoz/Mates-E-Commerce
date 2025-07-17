import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ordersAdmin.css";

const OrdersAdmin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/orders", {
          withCredentials: true,
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Error al obtener pedidos:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="admin-orders">
      <h1>Pedidos de clientes</h1>
      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Total</th>
            <th>Método de pago</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th>Productos</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>
                {order.user?.username || "Sin nombre"} <br />
                <small>{order.user?.email || "Sin email"}</small>
              </td>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>${order.total}</td>
              <td>{order.paymentMethod}</td>
              <td>{order.status}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
              <td>
                {order.items.map((item, i) => (
                  <div key={i}>
                    {item.name || item.productId?.name || "Producto"} x
                    {item.quantity}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>

        
      </table>
    </div>
  );
};

export default OrdersAdmin;
