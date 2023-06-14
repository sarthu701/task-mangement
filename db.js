import mongoose from "mongoose";

const connectToMongo = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }) .then(() => console.log("Connected to database"))
    .catch((error) => console.log(error.message));
}

export default connectToMongo