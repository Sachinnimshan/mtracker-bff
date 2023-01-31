import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import dotenv from "dotenv";
import trackItemRouter from "./routes/trackRouter.js";
import userRouter from './routes/authRouter.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
const CONNECTION = process.env.DB_CONNECTION;

mongoose
  .connect(CONNECTION, {
    useNewUrlParser: true,
  })
  .then(() => console.log(`Database Connected`))
  .catch((error) => console.log(error));

app.use("/api/trackItems", trackItemRouter);
app.use("/api/user", userRouter);

app.use("/", (req, res) => {
  res.send("Server is Ready");
});

server.listen(PORT, () => console.log(`Server Started at ${PORT}`));
