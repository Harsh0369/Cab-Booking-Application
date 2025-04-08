import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const captainSchema = new mongoose.Schema(
  {
    fullname: {
      firstname: {
        type: String,
        required: true,
        minlength: [3, "First name must be at least 3 characters long"],
      },
      lastname: {
        type: String,
        minlength: [3, "Last name must be at least 3 characters long"],
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    socketId: {
      type: String,
    },
    active: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    vehicle: {
      color: {
        type: String,
        required: true,
        minlength: [3, "Color must be at least 3 characters long"],
      },
      plate: {
        type: String,
        required: true,
        minlength: [4, "Plate must be at least 4 characters long"],
      },
      vehicleType: {
        type: String,
        enum: ["car", "bike", "auto"],
        required: true,
      },
      capacity: {
        type: Number,
        required: true,
        min: [1, "Capacity must be at least 1"],
      },
    },
    location: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

captainSchema.methods.comparePassword = async function (password, hash) {
  return await bcrypt.compare(password, hash);
};

captainSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const captainModel = mongoose.model("captain", captainSchema);
export default captainModel;
