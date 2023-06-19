import mongoose from "mongoose";

const taskschema =new mongoose.Schema({
    title:{
        type:String,
    },
    task:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now(),
    },
})

mongoose.models ={}
module.exports =mongoose.model("Task",taskschema);

