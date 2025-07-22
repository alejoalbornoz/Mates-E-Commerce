import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

export const getTopUsers = async (req, res) => {
  try {
    // Trae todas las órdenes
    const orders = await Order.find();

    // Acumula el total gastado por usuario
    const userTotals = {};

    for (const order of orders) {
      const userId = order.user.toString();
      userTotals[userId] = (userTotals[userId] || 0) + order.total;
    }

    // Ordena por total gastado y toma los primeros 6
    const topUserIds = Object.entries(userTotals)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6);

    // Busca los datos del usuario para mostrar nombre y email
    const topUsers = await Promise.all(
      topUserIds.map(async ([userId, total]) => {
        const user = await User.findById(userId);
        return {
          username: user?.username || "Usuario",
          email: user?.email || "Sin email",
          total: total.toFixed(2),
        };
      })
    );

    res.status(200).json(topUsers);
  } catch (error) {
    console.error("Error al obtener los usuarios con más compras:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


export const getSummary = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const productCount = await Product.countDocuments();
    const orderCount = await Order.countDocuments();

    const orders = await Order.find();
    const totalIncome = orders.reduce((sum, order) => sum + order.total, 0);

    res.json({
      users: userCount,
      products: productCount,
      orders: orderCount,
      income: totalIncome.toFixed(2),
    });
  } catch (error) {
    console.error("Error al obtener resumen:", error);
    res.status(500).json({ error: "Error al obtener los datos del dashboard" });
  }
};