import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./HomeProducts.module.css";
import products from "../../../data/products.js";

export default function HomeProducts() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("none"); // nuevo estado para ordenar

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "highPrice") return b.price - a.price;
    if (sort === "lowPrice") return a.price - b.price;
    return 0;
  });

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

        {/* Selector de orden */}
        <div className={style.filterSelect}>
          <div className={style.selectContainer}>
            <select value={sort} onChange={handleSortChange}>
              <option value="none">Ordenar por</option>
              <option value="highPrice">Mayor precio</option>
              <option value="lowPrice">Menor precio</option>
            </select>
          </div>
        </div>
      </div>

      {/* Cuadrícula de productos */}
      <div className={style.grid}>
        {sortedProducts.map((product) => (
          <div key={product.id} className={style.gridContainer}>
            <div>
              <h1>{product.name}</h1>
              <h2>${product.price}</h2>
              <button>Comprar</button>
              <Link to={`/productos/${product.id}`}>
                <button>Ver</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
