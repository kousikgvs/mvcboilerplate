import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export const user = mongoose.model("users", userschema);
