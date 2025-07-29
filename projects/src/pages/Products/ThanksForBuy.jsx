import React from 'react';
import { Link } from 'react-router-dom';
import './thanksForBuy.css'; 

function ThanksForBuy() {
  return (
    <div className="thanks-container">
      <h1 className="thanks-title">¡Muchas gracias por tu compra!</h1>
      <p className="thanks-message">¡Tu pedido está en camino!</p>
      <p className="thanks-message">Te enviamos un e-mail con un link para que puedas seguir la entrega de tu compra.</p>

      <Link to="/" className="thanks-link">
        Ir al inicio
      </Link>
    </div>
  );
}

export default ThanksForBuy;
