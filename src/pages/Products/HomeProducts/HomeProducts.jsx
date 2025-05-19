import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./HomeProducts.module.css";
import products from "../../../data/products.js";

export default function HomeProducts() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("none");

  const categories = ["all", "mate", "bombilla", "termo"];

  const getFilteredAndSortedProducts = () => {
    let result =
      filter === "all"
        ? products
        : products.filter((p) => p.category === filter);

    if (sort === "highPrice")
      result = [...result].sort((a, b) => b.price - a.price);
    else if (sort === "lowPrice")
      result = [...result].sort((a, b) => a.price - b.price);

    return result;
  };

  const displayedProducts = getFilteredAndSortedProducts();

  return (
    <div className={style.container}>
      <div className={style.filterContainer}>
        <div className={style.filterButtons}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${style.filterButton} ${
                filter === cat ? style.active : ""
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat === "all"
                ? "Todos"
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className={style.filterSelect}>
          <div className={style.selectContainer}>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="none">Ordenar por</option>
              <option value="highPrice">Mayor precio</option>
              <option value="lowPrice">Menor precio</option>
            </select>
          </div>
        </div>
      </div>

      <div className={style.grid}>
        {displayedProducts.map((product) => (
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
