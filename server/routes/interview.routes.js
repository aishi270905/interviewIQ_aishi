import express from "express";
import isAuth from "../middlewares/isAuth.middlewares.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { analyseResume, finishInterview, generateQuestion, submitAnswer } from "../controllers/interview.controllers.js";


const interviewRouter = express.Router();

interviewRouter.post("/resume", isAuth, upload.single("resume"), analyseResume)
interviewRouter.post("/generate-questions", isAuth, generateQuestion)
interviewRouter.post("/submit-answer", isAuth, submitAnswer)
interviewRouter.post("/finish", isAuth, finishInterview)

export default interviewRouter;