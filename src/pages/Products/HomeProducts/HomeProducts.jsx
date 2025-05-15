import { useState } from "react";
import style from "./HomeProducts.module.css";
import { products  } from "../../../data/products";


export default function HomeProducts() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className={style.container}>
      <div className={style.filterContainer}>
        {/* Botones de filtro */}
        <div className={style.filterButtons}>
          <button
            className={`${style.filterButton} ${
              filter === "all" ? style.active : ""
            }`}
            onClick={() => setFilter("all")}
          >
            Todos
          </button>
          <button
            className={`${style.filterButton} ${
              filter === "mate" ? style.active : ""
            }`}
            onClick={() => setFilter("mate")}
          >
            Mates
          </button>
          <button
            className={`${style.filterButton} ${
              filter === "bombilla" ? style.active : ""
            }`}
            onClick={() => setFilter("bombilla")}
          >
            Bombillas
          </button>
          <button
            className={`${style.filterButton} ${
              filter === "termo" ? style.active : ""
            }`}
            onClick={() => setFilter("termo")}
          >
            Termos
          </button>
        </div>

        <div className={style.filterSelect}>
          <div className={style.selectContainer}>
            <select name="" id="">
              <option value="all">Todos</option>
              <option value="mate">Mayor precio</option>
              <option value="bombilla">Menor precio</option>
            </select>
          </div>
        </div>
      </div>

      {/* Cuadrícula de productos */}
      <div className={style.grid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={style.gridContainer}>
            <div>
              <h1>{product.name}</h1>
              <button>Comprar</button>
              <button>Ver</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
