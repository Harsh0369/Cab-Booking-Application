import { Router } from "express";
import { body } from "express-validator";
import * as captainController from "../controllers/captain.controller.js";
import * as authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    body("fullname.firstname").isLength({ min: 3 }).withMessage("First name must be at least 3 characters long"),
    body("fullname.lastname").isLength({ min: 3 }).withMessage("Last name must be at least 3 characters long"),
    body("vehicle.color").isLength({ min: 3 }).withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate").isLength({ min: 4 }).withMessage("Plate must be at least 4 characters long"),
    body("vehicle.capacity").isNumeric().withMessage("Capacity must be a number"),
    body("vehicle.vehicleType").isIn(["car", "bike", "auto"]).withMessage("Vehicle type must be one of the following: car, bike, auto"),
], captainController.createCaptain);

router.post("/login", [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    body("email").notEmpty().withMessage("Email is required"),
    body("password").notEmpty().withMessage("Password is required"),
], captainController.loginCaptain);

router.get("/profile",authMiddleware.authCaptain,captainController.getProfile);

export default router;