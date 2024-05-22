import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'
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

        next(errorHandler(400, "All fields are required!!")); //we use custom error handlers 

    }

    //mix salt with password and enable hashing for securely store password in DB
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    //create new use
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


//for sign in controller 
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    //check if all fields are filled or not
    if (!email || !password || email === "" || password === "") {
        next(errorHandler(400, "All fields are required!!")); //we use custom error handlers 

    }

    try {

        //user valid or not
        const validUser = await User.findOne({ email });
        console.log(validUser)
        if (!validUser) {
            return next(errorHandler(404, "User Not Found!!"))
        }

        //password valid or not
        const validPassword = bcryptjs.compareSync(password, validUser.password) //compare password
        if (!validPassword) {
            return next(errorHandler(400, "Invalid password!!"))
        }


        //2:40:49 

        const token = jwt.sign(
            {
                id: validUser._id
            },
            process.env.JWT_SECRET
        );

        //separate  password
        const { password: pass, ...rest } = validUser._doc;


        res.status(200).cookie('access_token', token, {
            httpOnly: true
        }).json(rest)




    } catch (error) {
        next(error)
    }



}

//google auth 
export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;

    try {

        //check user exist or not
        const user = await User.findOne({ email });

        //if user present 
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

            const { password, ...rest } = user._doc;

            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest)
        }

        //new user
        else {
            //in models mongodb must require password, but when we signup with google then firebase authenticate with email only but password required to store the user in mongodb so we create or generate random password for that user

            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

            //hasing that password
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

            //new user creation
            const newUser = new User(
                {
                    username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),

                    email,
                    password: hashedPassword,
                    profilePicture: googlePhotoUrl,



                }
            )
        };

        await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        const { password, ...rest } = user._doc;

        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(rest);


    } catch (error) {
        console.log("error in google function",error)
    }
}