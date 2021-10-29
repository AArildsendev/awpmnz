import mongoose from "mongoose";

const moanSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },
  complaint: {type:String, required:true},
  rablerable: Number,
});

const moan = mongoose.model("moan", moanSchema);

export default mainmoan;