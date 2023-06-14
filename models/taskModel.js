import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    priority:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type: Date,
        default : new Date()
    }
})

const TaskModel = mongoose.model("TaskModel",taskSchema)

export default TaskModel