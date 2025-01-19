import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n Connected to MongoDB successfully !! DB HOST: ${connectionInstance.connection.host} \n`);
    } catch (error) {
        console.error("MONGOdB CONNECTION ERROR: ", error)
        process.exit(1)
    }
}

export default connectDB;