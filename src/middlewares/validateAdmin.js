export const isAdmin = (req, res, next) => {
  console.log("Usuario en req.user:", req.user); // 👈

  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }

  next();
};
