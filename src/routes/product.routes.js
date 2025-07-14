import express from "express";
import Product from "../models/product.model.js";
import { authRequired } from "../middlewares/validateToken.js";
import User from "../models/user.model.js";
import { isAdmin } from "../middlewares/validateAdmin.js";

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
  try {
    const products = await Product.find();

    // Convertir cada producto a objeto plano y agregar campo `id`
    const formattedProducts = products.map((p) => ({
      ...p.toObject(),
      id: p._id, // 👈 Esto es lo importante
    }));

    res.json(formattedProducts);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
});

router.put("/:id", authRequired, isAdmin, async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(product);
});

router.delete("/:id", authRequired, isAdmin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
