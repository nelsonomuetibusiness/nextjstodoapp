import mongoose from "mongoose";




const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    alert("database connected");
  } catch (error){
    
  }
};

export default connectMongoDb;