import { asynchandler } from "../utils/asynchandler.js";


const errorHandler = asynchandler(async (req, res, next) => {
    res.status(200).json({
        message:"Internal Server Error",
    })
})

export { errorHandler };