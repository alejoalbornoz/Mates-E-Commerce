import express from "express";
import Product from "../models/product.model.js";
import { authRequired } from "../middlewares/validateToken.js";
import User from "../models/user.model.js";

const router = express.Router();

// Crear producto (modo admin)
router.post("/", authRequired, async (req, res) => {
  try {
    // Verificamos si el usuario es admin
    const user = await User.findById(req.user.id);
    if (!user || user.role !== "admin") {
      return res.status(403).json({
        message: "Acceso denegado: solo el admin puede crear productos",
      });
    }

    const { name, description, price, image, stock, category } = req.body;

    const product = new Product({
      name,
      description,
      price,
      image,
      stock,
      category,
    });
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.log("Error al crear el producto:", error);
    res.status(500).json({ message: "Error al crear el producto", error });
  }
});

// Obtener productos
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

export default router;
