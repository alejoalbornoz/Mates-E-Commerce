import React, { useEffect, useState } from "react";
import axios from "axios";
import "./productsAdmin.css";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/products", {
        withCredentials: true,
      });
      console.log("Respuesta de productos:", res.data);
      setProducts(res.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await axios.put(
          `http://localhost:4000/api/products/${editing._id}`,
          form,
          {
            withCredentials: true,
          }
        );
      } else {
        await axios.post("http://localhost:4000/api/products", form, {
          withCredentials: true,
        });
      }

      setForm({ name: "", description: "", price: "", image: "" });
      setEditing(null);
      getProducts();
    } catch (error) {
      console.error("Error al guardar producto:", error);
    }
  };

  const handleEdit = (product) => {
    setEditing(product);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/products/${id}`, {
        withCredentials: true,
      });
      getProducts();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  return (
    <div className="productsDashboard">
      <h2>Administrar Productos</h2>

      <div className="content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Precio"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Imagen URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
          <textarea
            placeholder="Descripción"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <button type="submit">{editing ? "Actualizar" : "Crear"}</button>
        </form>

        <ul>
          {Array.isArray(products) &&
            products.map((product) => (
              <li key={product._id}>
                <div className="productInfo">
                  <strong>{product.name}</strong>
                  <span>${product.price}</span>
                </div>
                <div className="productActions">
                  <button onClick={() => handleEdit(product)}>Editar</button>
                  <button onClick={() => handleDelete(product._id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsAdmin;
