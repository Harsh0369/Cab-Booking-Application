import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 60 * 24 * 7, // 7 days
  },
});

const BlacklistToken = mongoose.model("BlacklistToken", tokenSchema);

export default BlacklistToken;
