import express, { Router } from "express";

import { createOrder, getAllOrders } from  "../controllers/checkout.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { isAdmin } from "../middlewares/validateAdmin.js";

const router = Router();

router.post("/", authRequired, createOrder);
router.get("/", authRequired, isAdmin, getAllOrders);

export default router;
