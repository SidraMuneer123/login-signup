import express from 'express';
const todoRouter = express.Router();
import createTodo from '../Controllers/todoController.js';
import getTodo from '../Controllers/todoController.js'
import auth from '../middleware/auth.js';

todoRouter.post('/add',auth, createTodo)
todoRouter.get('/gettodo',auth,getTodo )

export default todoRouter;