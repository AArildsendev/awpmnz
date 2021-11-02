import mongoose from "mongoose";
mongoose.connect("mongodb://localhost/moandb",{
  useNewUrlParser: true, useUnifiedTopology:true});
  const moanSchema = new mongoose.Schema({
    headline: {
      type: String,
      required: true,
    },
    complaint: {type:String, required:true},
    rablerable: Number,
  });
async function doStuff(){
 


let moanone = new Moan({
  headline:"jeg hader min chef",
  complaint:"han er dum",
  rablerable:1
});
try {
  const eternalMoan = await moanone.save();
  console.log("You moan is saved for an eternity",eternalMoan);
}catch(error){
  console.error(error);
}

}
const Moan = mongoose.model("moan", moanSchema);
doStuff().then(()=>{
mongoose.disconnect();
})

export default Moan;