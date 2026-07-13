import express from "express";
import isAuth from "../middlewares/isAuth.middlewares.js";
import { getCurrentUser } from "../controllers/user.controllers.js";


const userRouter = express.Router();

userRouter.get("/current-user", isAuth, getCurrentUser)

export default userRouter;