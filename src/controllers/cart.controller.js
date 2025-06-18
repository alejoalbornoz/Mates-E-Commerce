import Cart from "../models/cart.model.js";

export const getCart = async (req, res) => {
  const userId = req.user.id;
  const cart = await Cart.findOne({ userId }).populate("items.productId");
  if (!cart) return res.json({ items: [] });
  res.json(cart);
};

export const addToCart = async (req, res) => {
  const userId = req.user.id;
  const { productId, quantity } = req.body;

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ userId, items: [] });
  }

  const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  await cart.save();
  res.json(cart);
};

export const removeFromCart = async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.body;

  const cart = await Cart.findOneAndUpdate(
    { userId },
    { $pull: { items: { productId } } },
    { new: true }
  );

  res.json(cart);
};

export const clearCart = async (req, res) => {
  const userId = req.user.id;
  await Cart.findOneAndUpdate({ userId }, { items: [] });
  res.json({ message: "Cart cleared" });
};
