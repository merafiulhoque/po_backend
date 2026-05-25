import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { registerController } from "../controllers/auth.controller.js";

const authRouter = Router()

//routes
authRouter.post("/register", asyncHandler(registerController))

export default authRouter