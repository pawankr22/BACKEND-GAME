// require("dotenv").config();

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js';

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.error("MONGODB connection failed !!: ", error);
        throw error
    })
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.error("MONGODB connection failed !!: ", error)
    process.exit(1)
});












/*import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error("ERROR: ", error);
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()*/