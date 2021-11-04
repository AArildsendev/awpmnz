import mongoose from "mongoose";

const moanSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },
  complaint: {type:String, required:true},
  rablerable: Number,
});

const Moan = mongoose.model("moan", moanSchema);

/*
async function doStuff(){
const mainmoan = new Moan({headline:"Chef er endnu dummere idag",complaint:"han sender emails",rablerable:0})
try{
  const savemoan = await mainmoan.save();
  console.log("Moan saved:", savemoan.headline);
}catch(error){
  console.error(error);
}

doStuff().then(()=>{
  mongoose.disconnect();
})}*/

export default Moan;