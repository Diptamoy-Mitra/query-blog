import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from  '../utils/error.js'
// const bcrypt = require('bcryptjs');

//for sign up 
//request comes from frontend to backend and then it goes to controller and then it goes to model and then it goes to database and then it comes back to model and then it goes to controller and then it goes to frontend as response
export const signup = async (req, res, next) => {
    // console.log(req.body) 

    //get data from frontend
    const { username, email, password } = req.body;

    //check if all fields are filled or not
    if (!username || !email || !password || username === "" || email === "" || password === "") {
        // return res.status(400).json({ error: "All fields are required" })

        next(errorHandler(400, "All fields are required")); //we use custom error handlers 

    }

    //mix salt with password and enable hashing for securely store password in DB
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    //create new user
    const newUser = new User({ username, email, password: hashedPassword });

    //save inside database and send response to frontend 
    try {
        await newUser.save();
        res.json('Sign up successfull')
    } catch (error) {
        // console.log(error)
        // return res.status(500).json({ error: "Email or Username already exists" })
        next(error)
    }
}