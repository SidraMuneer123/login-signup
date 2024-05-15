import { Todo } from '../models/todo.js';
// import { User } from "..Schema.js";


const createTodo = async (req, res) => {
  try {
      const { title, description } = req.body;
      const userId = req.userId 
      const todo = new Todo({ title, description, user: userId });
      await todo.save();
      res.status(201).json(todo);
  } catch (error) {
      res.status(500).send('Error creating todo');
  }
};
const getTodo = async (req , res)=>{
    try {
      let todolist = await Todo.find({user: req.userId})
      res.status(200).json(todolist);
  
      
    } catch (error) {
      res.status(500).json({message :"Something went wrong"})
      
    }
  }
  


export default {createTodo , getTodo};