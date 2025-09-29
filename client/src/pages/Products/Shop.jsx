import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "./ProductGrid.jsx";
import "./Shop.css";

export default function Shop() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("none");
  const [products, setProducts] = useState([]);

  const categories = ["all", "Mates", "Bombillas", "Termos", "Yerbas"];

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("Error al traer productos", err));
  }, []);

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
    <div className="shop">
      {/* Filtros */}
      <div className="filterContainer">
        <div className="filterButtons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filterButton ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat === "all"
                ? "Todos"
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="filterSelect">
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="none">Ordenar por</option>
            <option value="highPrice">Mayor precio</option>
            <option value="lowPrice">Menor precio</option>
          </select>
        </div>
      </div>

      {/* Productos */}
      <div className="productsContainer">
        {displayedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
