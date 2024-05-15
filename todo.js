import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
    description: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

export const Todo = mongoose.model('Todo', todoSchema);
