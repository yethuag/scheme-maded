import mongoose from "mongoose";
const DB_Name = "my_database";
export const connectDB = async () => {
  try {
    const connectionResponse = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log(
      "DB Connected Successfully.",
      connectionResponse.connection.host
    );
  } catch (error) {
    console.log("DB Connection error", error);
    process.exit(1);
  }
};