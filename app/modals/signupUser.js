import mongoose from "mongoose";

const signupuserModal = new mongoose.Schema({
  password: String,
  username: {
    type: String,
    unique: true,
    required: [true, "email required"],
  },
  token: String,
});

// modal
export const signupUser =
  mongoose.models.signup || mongoose.model("signup", signupuserModal);