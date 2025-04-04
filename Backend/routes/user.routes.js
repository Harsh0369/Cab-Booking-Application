import express from "express";
import { body } from "express-validator";
import * as userController from "../controllers/user.controller.js";
import * as authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("fullname.firstname")
      .isString()
      .isLength({ min: 3 })
      .withMessage(
        "First name must contain only letters and be at least 3 characters long"
      )
      .matches(/^[A-Za-z]+$/)
      .withMessage("First name must contain only letters"),
  ],
  userController.register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.login
); 

router.get('/profile',authMiddleware.authUser,userController.getProfile);

export default router;
