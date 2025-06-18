// models/cart.model.js
import mongoose from "mongoose";
import User from "./user.model.js"


const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // si tenés un modelo de productos
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1,
  },
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User, // tu modelo de usuario
    required: true,
    unique: true,
  },
  items: [cartItemSchema],
}, { timestamps: true });

export default mongoose.model("Cart", cartSchema);
