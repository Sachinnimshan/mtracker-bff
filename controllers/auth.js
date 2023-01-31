import MTrackuser from "../models/auth.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const userLogin = async (req, res) => {
  try {
    const user = await MTrackuser.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({ email: user.email, id: user._id }, "secret", {
          expiresIn: "1h",
        });
        const result = {
          _id: user._id,
          name: user.name,
          email: user.email,
        };
        res.status(200);
        return res.json({ result, token });
      }
    }
    res.status(401).send("Invalid username or password");
  } catch (error) {
    res.status(401).send(error);
  }
};

export const userRegister = async (req, res) => {
  const existinguser = await MTrackuser.findOne({ email: req.body.email });
  if (existinguser) {
    res.status(401);
    return res.send("Email is already exist");
  } else {
    try {
      const user = new MTrackuser({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      const newuser = await user.save();
      const token = jwt.sign(
        { email: newuser.email, id: newuser._id },
        "secret",
        { expiresIn: "1h" }
      );
      const result = {
        _id: newuser._id,
        name: newuser.name,
        imageUrl: newuser.imageUrl,
        email: newuser.email,
      };
      res.status(200).send({ result, token });
    } catch (error) {
      res.status(401).send(error);
    }
  }
};
