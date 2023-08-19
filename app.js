import express from "express";
import userrouter from "./routes/users.js";
import { config } from "dotenv";
export const app = express();

config({
  path: "./data/config.env",
});

// using Middle ware
app.use(express.json());
app.use("/users", userrouter);

app.get("/", (req, res) => {
  res.send("WOrking fine ");
});
