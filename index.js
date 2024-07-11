const express =  require("express")
const jobroutes = require("./Routes/jobroutes");
const mongoose = require("mongoose")
const app =  express();
const dotenv = require("dotenv")



dotenv.config()

mongoose.connect(process.env.New_Database_Url)
.then(()=>console.log("DB connected sucessfully"))
.catch((err)=>console.log("Error connecting db",err))


app.use(express.json())


app.use(jobroutes)

app.listen(1000,()=>{
    console.log("server is up at at port no 1000");
})