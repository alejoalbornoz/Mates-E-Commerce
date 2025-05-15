import { useParams } from "react-router-dom";
import products from "/src/data/products.js"; 


export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Categoría: {product.category}</p>
      {/* Acá podrías agregar imagen, precio, descripción, etc. */}
    </div>
  );
}
