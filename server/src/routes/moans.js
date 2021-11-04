import express from "express";
import Moan from "../models/moan.js";

const moanRoutes = express.Router();

moanRoutes.get("/complaints/",async (req,res)=>{
    const moans = await Moan.find();
    res.json(moans)
    
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

moanRoutes.get("/:id",async(req,res)=>{
try{
    const moan = await Moan.findById(req.params.id);
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

export default moanRoutes;