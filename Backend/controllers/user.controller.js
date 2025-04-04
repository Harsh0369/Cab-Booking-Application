import userModel from "../models/user.model.js";

export const register = async (req, res) => {
    try
    {
        const { email, password, fullname } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await userModel.hashPassword(password);

        // Create new user
        const newUser = await userModel.create({
            email,
            password: hashedPassword,
            fullname,
        })

        return res.status(201).json({ message: "User registered successfully" },{newUser});
    }
    catch (error)
    {
        return res.status(500).json({ message: error.message });
    }
}