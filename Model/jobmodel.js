
const mongoose = require("mongoose")

const jobsSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
        default:"NA"
    },
    company:{
        type:String,
        required:true,
        unique: true,
    },
    location:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
} 
)


const JobSchema = mongoose.model("jobs",jobsSchema)

module.exports = JobSchema