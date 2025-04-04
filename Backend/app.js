import "dotenv/config";
import express from "express";
import cors from "cors";

import connectToDB from "./db/db.js"; // ✅ Correct import
connectToDB(); // ✅ Establish DB connection

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
