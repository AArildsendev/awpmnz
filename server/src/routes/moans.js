import express from "express";
import Moan from "../models/moan.js";

const moanRoutes = express.Router();

moanRoutes.get("/", async(req,res)=>{
    const moans = await Moan.find();
    res.json(moans);
});
moanRoutes.post("/", async(req,res)=>{
    try{
        const moan = await Moan.create(req.body);
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
        res.json({ error: "Something went wrong", details: error.toString() });

    }


});

export default moanRoutes;