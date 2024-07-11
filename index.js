const express =  require("express")
const jobroutes = require("./Routes/jobroutes");
const mongoose = require("mongoose")
const app =  express();

mongoose.connect("mongodb://localhost:27017/job_app ")
.then(()=>console.log("DB connected sucessfully"))
.catch((err)=>console.log("Error connecting db",err))


app.use(express.json())


app.use(jobroutes)

app.listen(1000,()=>{
    console.log("server is up at at port no 1000");
})