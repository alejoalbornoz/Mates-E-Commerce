import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { isAdmin } from "../middlewares/validateAdmin.js";
import { getTopUsers } from "../controllers/dashboard.controller.js";

const router = Router();

router.get("/top-users", authRequired, isAdmin, getTopUsers);



export default router;
