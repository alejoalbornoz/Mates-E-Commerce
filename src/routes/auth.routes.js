import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
  verifyToken,
  updateProfile,
} from "../controllers/auth.controller.js";
import { getAllUsers } from "../controllers/user.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import { isAdmin } from "../middlewares/validateAdmin.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authRequired, profile);
router.put("/update", authRequired, updateProfile)
router.get("/users", authRequired, isAdmin, getAllUsers);


export default router;
