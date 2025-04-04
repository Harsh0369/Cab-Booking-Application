import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.js";

import connectToDB from "./db/db.js";
import cookieParser from "cookie-parser";
connectToDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(morgan("dev"))


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", userRoutes); 

export default app;
