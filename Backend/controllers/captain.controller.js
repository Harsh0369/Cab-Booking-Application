import captainModel from "../models/captain.model.js";
import * as captainService from "../services/captain.service.js";

import { validationResult } from "express-validator";

export const createCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const { fullname, email, password, vehicle } = req.body;

    const isCaptain = await captainModel.findOne({ email });
    if (isCaptain) {
      return res.status(400).json({ message: "Captain already exists" });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname:fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });
    const token = captain.generateToken();
    return res
      .status(201)
      .json({ message: "Captain registered successfully", captain, token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
