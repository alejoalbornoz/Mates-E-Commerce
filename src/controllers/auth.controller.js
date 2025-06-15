import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
  
  try {
    
    const { username, email, password } = req.body;
    const userFound = await User.findOne({email})
    if (userFound) {
      return res.status(400).json(["The email already exists"]);
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });
    res.cookie("token", token);

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error registering user",
      error: error.message,
    });
  }
};

export const login = (req, res) => {
  res.send("register");
};
