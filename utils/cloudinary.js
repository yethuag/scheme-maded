import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config()

cloudinary.config({ 
    cloud_name: 'dbrzxmqs4', 
    api_key: '393378846637373', 
    api_secret: process.env.CLOUDINARY_API_SECRET
});
export const uploadFileToCloudinary = async (filePath) => {
    try {
      if (!filePath) return null;
  
      const response = await cloudinary.uploader.upload(filePath, {
        resource_type: "auto",
      });
      console.log("File upload complete", response.url);
      fs.unlinkSync(filePath);
      return response.url;
    } catch (error) {
      console.log(error);
      fs.unlinkSync(filePath);
      return null;
    }
  };