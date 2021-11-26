import express from "express";
import Moan from "../models/moan.js";

const moanRoutes = express.Router();

moanRoutes.get("/complaints/",async (req,res)=>{
    const moans = await Moan.find();
    res.json(moans)
    
});

moanRoutes.get("/complaints/:_id",async(req,res)=>{
    try{
        const moan =  await Moan.findById(req.params._id);
       
        if(moan){
            res.json(moan);
        }
        else{
            res.status(404);
            res.json({error:"moan does not exist"});
        }}
        catch(error){
            res.status(500);
            res.json({ error: "Something wwent wrong", details: error.toString() });
    
        }
        
    
    
    });

    moanRoutes.post("/complaints/", (req,res)=>{
    const moan = new Moan(req.body);
    try{
        moan.save(); 
        res.status(201);
        res.json(moan);
        }
        catch(error){
            res.status(500);
            res.json({
                error:"This moan is so whiny it could not be created",
                details:error.toString(),
            });
        }
        console.log("Hello")
});



moanRoutes.put("/complaints/:_id",async(req,res)=>{
    const upd = await Moan.findById(req.params._id);
    upd.rablerable = upd.rablerable+1
    await upd.save();
    console.log(upd)
}


)
   


    


    





export default moanRoutes;



