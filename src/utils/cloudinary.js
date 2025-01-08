import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

// Upload an image
const uploadResult = async(localFilePath) => {
    try {
        if(!localFilePath) return nulll
        //upload the file on coudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // File has been uploaded successfully
        console.log("File has been uploaded on cloudinary ",
        response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // Remove the locally saved temporary file as the upload gets failed
        return null;
    }
}

export {uploadResult};