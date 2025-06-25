import { useCart } from "../../Context/CartContext.jsx";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Tu carrito</h2>
      {cart.items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.items.map(item => (
            <div key={item.productId._id}>
              <h4>{item.productId.name}</h4>
              <p>Cantidad: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.productId._id)}>Eliminar</button>
            </div>
          ))}
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}
