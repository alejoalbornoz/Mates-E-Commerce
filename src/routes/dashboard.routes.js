import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { isAdmin } from "../middlewares/validateAdmin.js";
import { getTopUsers , getSummary} from "../controllers/dashboard.controller.js";

const router = Router();

router.get("/top-users", authRequired, isAdmin, getTopUsers);
router.get("/summary", authRequired, isAdmin, getSummary);




export default router;
