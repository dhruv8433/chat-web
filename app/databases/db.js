import mongoose from "mongoose";
import { MONGO_URI } from "../config";

export const connectDatabase = () => {
  try {
    mongoose.connect(MONGO_URI, {
      dbName: "chat-web-app",
    });
    // mongoose.connect(process.env.MONGO_URI ,{
    //   dbName: "chat-app",

    // });
    console.log("database connected successfully");
  } catch (error) {
    console.log("not connect database");
    console.log(error);
  }
};
