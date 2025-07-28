import { asynchandler } from "../utils/asynchandler.js";
import { User } from "../models/users.model.js";
import {apiError} from "../utils/apiError.js";
import {apiResponse} from "../utils/apiResponse.js";


// signup

const registerUser= asynchandler(async(req, res)=>{
      
    const { userName, email, fullName,gender,profilePicture, password } = req.body;

    if ([fullName, email, userName, password,gender,profilePicture]
        .some((field) => field?.trim() === "")) {

        throw new apiError(400, 'all fields are compulsory')
    }

     const exitedUser = await User.findOne(
        {
            $or: [{ userName }, { email }]
        }
    )

    if(exitedUser) {
        throw new apiError(400, 'user already exists')
    }
    
    const localProfilePicture= req.files?.profilePicture.path;

    if(!localProfilePicture) {
        throw new apiError(400, 'profile picture is required')
    }
    


})


















// login 
const login= asynchandler(async (req, res) => {
    const { email, password } = req.body;
//logout
//view profile
// view mwmbership 
// view payment history 
// make payment
// view remaining days of membership
//view leaderboard
//view traniers

//change username 
// change password
// change email 



export { getUser };