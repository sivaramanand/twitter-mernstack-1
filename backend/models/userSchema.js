import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    requied: true,
  },
  username: {
    type: String,
    requied: true,
  },
  email: {
    type: String,
    requied: true,
    unique:true
  },
  pasword: {
    type: String,
    requied: true,
  },
},{timestamps:true});

export const User=mongoose.model("User",userSchema)