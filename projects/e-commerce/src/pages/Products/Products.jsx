import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Shop.module.css";
import { PRODUCTS } from "../../data/products.js";
import { Product } from "./ProductGrid.jsx";

export default function Shop() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("none");

  const categories = ["all", "mate", "bombilla", "termo"];

  const getFilteredAndSortedProducts = () => {
    let result =
      filter === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === filter);

    if (sort === "highPrice")
      result = [...result].sort((a, b) => b.price - a.price);
    else if (sort === "lowPrice")
      result = [...result].sort((a, b) => a.price - b.price);

    return result;
  };

  const displayedProducts = getFilteredAndSortedProducts();

  return (
    <div className={style.shop}>
      <div className={style.shopTitle}>
        <h1>Productos</h1>
      </div>

      {/* Filtros y orden */}
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
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="none">Ordenar por</option>
            <option value="highPrice">Mayor precio</option>
            <option value="lowPrice">Menor precio</option>
          </select>
        </div>
      </div>

      {/* Productos */}
      <div className={style.productsContainer}>
        {displayedProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}
