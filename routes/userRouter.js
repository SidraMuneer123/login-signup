import express from 'express'
const userRouter = express.Router();

import {signup,signin} from "../Controllers/userControllers.js";

userRouter.post("/register" , signup);
userRouter.post("/login" , signin);

export default userRouter;