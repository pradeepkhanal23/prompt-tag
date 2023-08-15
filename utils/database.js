import mongoose from "mongoose";

let isConnected = false; //tracking the database connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Database is already connected");
    return;
  } else {
    try {
      await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      isConnected = true;
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.log("Error connecting to MongoDB", error);
    }
  }
};
