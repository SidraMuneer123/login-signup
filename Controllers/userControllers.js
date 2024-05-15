import { User } from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const SECRET_KEY = 'TodoApi';
// import { User } from "./Schema.js";


const signup = async (req, res) => {
  try {
      const {Firstname , Lastname, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user =  new User({ email, password: hashedPassword });
      const token = jwt.sign({email : user.email , id: user._id} , SECRET_KEY)
      res.json({ id: user._id, Firstname, Lastname, email , hashedPassword , token:token})
      await user.save();
      // res.send(user);
  } catch (error) {
      res.status(500).send('Error registering user');
  }

};

const signin = async (req , res)=>{
  const {email , password} = req.body;
  const user = await User.findOne({email});
  if(!user){
    return res.json("User not found")
  }
 
  if(!await bcrypt.compare(password , user.password)){
    return res.json("invalid password")
  }
  const token = jwt.sign({id: user._id} , SECRET_KEY)
  res.json({user:user , token})
}

export {signup , signin}
