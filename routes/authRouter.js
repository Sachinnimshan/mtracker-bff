import express from "express";
import { userLogin, userRegister } from "../controllers/auth.js";
import { userValidate } from "../validations/authValidate.js";

const router = express.Router();

router.post("/login", userLogin);
router.post("/register", userValidate, userRegister);
export default router;
