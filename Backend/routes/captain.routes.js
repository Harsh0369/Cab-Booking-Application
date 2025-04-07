import { Router } from "express";
import * as captainController from "../controllers/captain.controller.js";

const router = Router();

router.post("/create", captainController.createCaptain);

export default router;