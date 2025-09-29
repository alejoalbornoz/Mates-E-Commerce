import express from "express";
import { addToCart, getCart, removeFromCart, clearCart } from "../controllers/cart.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = express.Router();

router.get("/", authRequired, getCart);
router.post("/add", authRequired, addToCart);
router.post("/remove", authRequired, removeFromCart);
router.delete("/clear", authRequired, clearCart);

export default router;
