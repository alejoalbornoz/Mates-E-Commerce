import { useEffect, useState } from "react";

import { useCart } from "../../Context/CartContext.jsx";
import axios from "../../api/axios.js";
import "./Products.css"

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error al obtener productos", err));
  }, []);

  return (
  <div className="products">
    <h2>Productos</h2>
    <div className="productsList">
      {products.map((product) => (
        <div key={product._id} className="product">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button className="addToCartBttn" onClick={() => addToCart(product._id)}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  </div>
);

}
