import { useState } from "react";
import style from "./HomeProducts.module.css";

const products = [
  { id: 1, name: "Mate Imperial", category: "mate" },
  { id: 2, name: "Mate Camionero", category: "mate" },
  { id: 3, name: "Bombilla de acero", category: "bombilla" },
  { id: 4, name: "Termo Stanley", category: "termo" },
  { id: 5, name: "Bombilla curva", category: "bombilla" },
  { id: 6, name: "Termo Lumilagro", category: "termo" },
];

export default function HomeProducts() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className={style.container}>
      {/* Botones de filtro */}
      <div className={style.filterButtons}>
        <button
          className={`${style.filterButton} ${filter === "all" ? style.active : ""}`}
          onClick={() => setFilter("all")}
        >
          Todos
        </button>
        <button
          className={`${style.filterButton} ${filter === "mate" ? style.active : ""}`}
          onClick={() => setFilter("mate")}
        >
          Mates
        </button>
        <button
          className={`${style.filterButton} ${filter === "bombilla" ? style.active : ""}`}
          onClick={() => setFilter("bombilla")}
        >
          Bombillas
        </button>
        <button
          className={`${style.filterButton} ${filter === "termo" ? style.active : ""}`}
          onClick={() => setFilter("termo")}
        >
          Termos
        </button>
      </div>

      {/* Cuadrícula de productos */}
      <div className={style.grid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={style.gridContainer}>
            <h1>{product.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
