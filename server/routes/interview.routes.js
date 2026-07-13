import express from "express";
import isAuth from "../middlewares/isAuth.middlewares.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { analyseResume } from "../controllers/interview.controllers.js";


const interviewRouter = express.Router();

interviewRouter.post("/resume", isAuth, upload.single("resume"), analyseResume)

export default interviewRouter;