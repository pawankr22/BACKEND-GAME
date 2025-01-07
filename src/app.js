import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" })); // for parsing application/json
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public")); // for serving static files
app.use(cookieParser()); // for parsing cookies


export default app;