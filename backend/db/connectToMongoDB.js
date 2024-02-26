import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDBURL);
    console.log("connect to MONGODB")
  } catch (error) {
    console.log(error.message);
  }
}

export default connectToMongoDB;