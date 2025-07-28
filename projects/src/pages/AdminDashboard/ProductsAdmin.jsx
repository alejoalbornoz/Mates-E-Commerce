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
    category: "",
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
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("price", form.price);
      formData.append("category", form.category);
      if (form.image) {
        formData.append("image", form.image); // solo si hay imagen
      }

      if (editing) {
        await axios.put(
          `http://localhost:4000/api/products/${editing._id}`,
          formData,
          {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        await axios.post("http://localhost:4000/api/products", formData, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setForm({
        name: "",
        description: "",
        price: "",
        image: "",
        category: "",
      });
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
      category: product.category,
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
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          >
            <option value="">Seleccionar categoría</option>
            <option value="Mates">Mates</option>
            <option value="Bombillas">Bombillas</option>
            <option value="Termos">Termos</option>
            <option value="Yerbas">Yerbas</option>
          </select>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
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
