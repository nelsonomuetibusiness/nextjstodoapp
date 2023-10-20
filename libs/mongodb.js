import mongoose from "mongoose";




const connectMongoDb = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    alert("database connected");
  } catch (error){
    alert(error);
  }
};

export default connectMongoDb;