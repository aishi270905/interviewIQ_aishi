import express from "express";
import dotenv from "dotenv";
dotenv.config()
import connectDb from "./config/connectDb.config.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import interviewRouter from "./routes/interview.routes.js";



const app = express();

app.use(cors({//communicating frontend to backend running on different origins
  origin : "http://localhost:5173",  //mentioning from which frontend we are fetching the input data
  credentials : true
}));  
app.use(express.json());//it's middleware that tells Express to automatically parse incoming JSON data : reading the data in json format in backend server
app.use(cookieParser());//it is middleware that reads cookies sent by the client

app.use("/api/auth", authRouter); //for authentication of the user
app.use("/api/user", userRouter); //for fetching the api of the current user from the user
app.use("/api/interview", interviewRouter); 

const PORT = process.env.PORT || 6000;
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
    connectDb()
});

