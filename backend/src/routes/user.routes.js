import { Router } from "express";
import { getUser } from "../controllers/user.controller.js";



const router = Router();


router.route('/getuser').get(getUser);


export default router