import userModel from "../models/user.model.js";
import * as userService from "../services/user.service.js";

import { validationResult } from "express-validator";

export const register = async (req, res) => {
    try
    {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const { email, password, fullname } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await userModel.hashPassword(password);

        // Create new user
        const newUser = userService
            .createUser({
                email,
                password: hashedPassword,
                fullname,
            });

        const token = newUser.generateToken();

        return res.status(201).json({ message: "User registered successfully" ,newUser});
    }
    catch (error)
    {
        return res.status(500).json({ message: error.message });
    }
}