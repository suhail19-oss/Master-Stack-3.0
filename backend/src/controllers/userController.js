import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
 
export const userLogin = async (req, res) => {
    const { mobileNumber, password } = req.body;

    const user = await userModel.findOne({ mobileNumber });
    if (!user) {
      return res.status(400).json({ message: 'Invalid mobile number or password' });
    }
  
    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch  = (password==user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid mobile number or password' });
    }
  
    const token = jwt.sign({ userId: user._id, mobileNumber: user.mobileNumber }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  
    res.json({ message: 'Login successful', token });
}