import userModel from "../models/user.model.js";
import BlacklistTokenModel from "../models/blacklistToken.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const isBlacklisted = await BlacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try
    {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = user;
        next();
    }
    catch (error)
    {
        console.log(error);
        return res.status(401).json({ message: "Unauthorized" });
    }
}