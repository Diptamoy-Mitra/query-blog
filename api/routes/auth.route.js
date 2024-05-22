import express from 'express';
import {signup, signin, google} from '../controllers/auth.controller.js';

const router=express.Router();


//sign up post request for user sign up
router.post('/signup', signup);

//sign in post request for user sign in
router.post('/signin', signin)

//google auth
router.post('/google', google);
export default router;