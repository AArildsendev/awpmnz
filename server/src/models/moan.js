import mongoose from "mongoose";
const moanSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },
  complaint: {type:String, required:true},
  rablerable: Number,
});

const Moan = mongoose.model("Moan", moanSchema);

async function stuff(){
/*let mainmoan = new Moan({headline:"Chef er endnu dummere idag",complaint:"han sender emails",rablerable:0})
try{
const savedmoan = await mainmoan.save();
console.log("Moan saved",savedmoan.headline);
}catch(error){
  console.error(error);*/
  console.log("connected")
}



stuff().then(()=>
mongoose.disconnect
);




export default Moan;