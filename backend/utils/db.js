import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const mongoUri = process.env.MONGO_URI

const db = ()=> mongoose.connect(mongoUri)
  .then(() => {
    console.log(" connected successfully");
  })
  .catch((error) => {
    console.log("connection failed", error);
  });




export default db;