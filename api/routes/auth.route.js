import express from 'express';
import {signup} from '../controllers/auth.controller.js';

const router=express.Router();


//sign up post request for user sign up
router.post('/signup', signup);

export default router;