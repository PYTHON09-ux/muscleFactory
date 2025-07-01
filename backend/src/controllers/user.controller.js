import { asynchandler } from "../utils/asynchandler.js";
import { clerkClient } from '@clerk/clerk-sdk-node';


const getUser= asynchandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "admin data fetched sueccessfully",
        data:req.user,
    });
})


export { getUser };