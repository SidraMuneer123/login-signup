import express from 'express'
const app = express();
const port = 3000;
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import todoRouter from './routes/todoRouter.js'

app.use(express.json());

await mongoose.connect("mongodb://localhost:27017/");

app.use("/users" , userRouter);
app.use("/todo" , todoRouter);







app.listen(port , ()=>{
  console.log(`The server is running at port http://localhost:${port}`)
})
