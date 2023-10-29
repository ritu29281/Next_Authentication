import mongoose from "mongoose";
export const connectMongodB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("Error to connect", error);
  }
};
