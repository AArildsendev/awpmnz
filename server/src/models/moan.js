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

export default Moan;