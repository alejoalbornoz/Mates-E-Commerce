import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";


import cartRoutes from "./routes/cart.routes.js";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";


const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/products", productRoutes);


export default app;
