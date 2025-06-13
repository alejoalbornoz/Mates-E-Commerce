import { useParams } from "react-router-dom";
import {PRODUCTS} from "/src/data/products.js";
import style from "./ShopDetail.module.css";
import Navbar from "/src/components/Navbar.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.containerProduct}>

          <div className={style.detailContainer}>
            <div className={style.imageContainer}>
            <h1>{PRODUCTS.name}</h1>
            
            <div className={style.image}>
              <img src={PRODUCTS.productImage}alt="" />
            </div>
            </div>
            <div className={style.infoContainer}>
              <p>Categoría: {PRODUCTS.category}</p>

              <button>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
