import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  
});

const moan = mongoose.model("comment", moanSchema);

export default comment;