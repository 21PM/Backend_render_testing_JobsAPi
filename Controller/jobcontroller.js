
const jobModel = require("../Model/jobmodel")

const createJob = async (req,res,next) =>{
    
        try{
            console.log(req.body);
            const response  = await jobModel.create(req.body)
            console.log(response);
                res.json({
                    message:"createJob api has been called"
                })
        }catch(e){
            console.log("error from catch",e.message)
            res.status(400).json({
                status:false,
                message:"something went wrong"
            })
        }
    }

    const listJob = async (req,res,next) =>{
        try{   let min = req.query.min;
            const jobsList = await jobModel.find({
                salary:{$gte:min}
            });
            res.json({
                status:true,
                message:"list api called",
                result:jobsList
            })
        }catch(e){
            console.log("ListJob error");
            res.status(500).json({
                status:false,
                message:"something went wrong from list api"
            })
        }
    }

    const updateJob = async (req,res,next) =>{

        const updatedObj = {
           $set:req.body
        }
        const filterObj = {
            salary:{
                $gte:120000
                

            }
        };
        
        try{
            
            // const response = await jobModel.findByIdAndUpdate(req.params.id,updatedObj)

            const response = await jobModel.updateMany(filterObj,updatedObj)

            if(response){
                res.status(200).json({
                    message:"UpdateJob api has been called"
                })
    
            }else{
                res.status(404).json({
                    status:false,
                    message:"Given Id is not found"
                })
            }
            

        }catch(e){
            console.log("updateJob error");
            res.status(404).json({
                status:false,
                message:"Give Id not found"
            })
        }
        
    }

    const deleteJob = (req,res,next) =>{
        res.json({
            message:"DeleteJob api has been called"
        })
    }



    const jobController = {
        createJob,
        listJob,
        updateJob,
        deleteJob
    }

    module.exports = jobController;