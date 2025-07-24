import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  try {
    const {
      name,
      address,
      city,
      state,
      zip,
      country,
      paymentMethod,
      items,
      total,
    } = req.body;

    const userId = req.user.id;

    // Mapeo para ajustarlo al esquema Order
    const mappedItems = items.map((item) => ({
      productId: item.id,
      name: item.name || item.title || "Producto sin nombre",
      quantity: item.quantity,
      price: item.price,
      category: item.category || "Sin categoría", // <-- esta línea es clave
    }));

    const newOrder = new Order({
      user: userId,
      name,
      address,
      city,
      state,
      zip,
      country,
      paymentMethod,
      items: mappedItems,
      total,
    });

    await newOrder.save();
    res.status(201).json({ message: "Orden creada con éxito" });
  } catch (error) {
    console.error("Error al crear la orden:", error);
    res.status(500).json({ error: "No se pudo crear la orden" });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "username email")
      .populate("items.productId", "name price image");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las órdenes" });
  }
};
