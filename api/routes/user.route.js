import express from "express";
import { test } from "../controllers/user.controller.js";


const router=express.Router();


//all routes define here
router.get('/test', test)


export default router;