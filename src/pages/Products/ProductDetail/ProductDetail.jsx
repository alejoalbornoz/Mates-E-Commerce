import { useParams } from "react-router-dom";
import products from "/src/data/products.js";
import style from "./ProductDetail.module.css";
import Navbar from "/src/components/Navbar.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.containerProduct}>
          <h1>{product.name}</h1>

          <div className={style.detailContainer}>
            <div className={style.imageContainer}></div>
            <div className={style.infoContainer}>
              <p>Categoría: {product.category}</p>

              <button>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
