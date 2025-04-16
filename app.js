import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js"
const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.ORIGIN
}));
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
    limit: "50mb"
}));
app.use(express.static("public"));
app.use(cookieParser());


app.use("/api/v1",authRouter)

export {app};
