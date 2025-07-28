import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    
    profilePicture: {
        type: String,
        default: null
    },
    
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    memberShipType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Membership',
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    },
    
},{timestamps: true});


userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return;

    this.password= await bcrypt.hash(this.password, 12)
    next()
})

userSchema.methods.isPasswordCorrect= async function (password){
   return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken= function(){
    return jwt.sign(
        {
            _id: this._id,
            email:this.email,
            userName:this.userName,
            fullName:this.fullName
        },

        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


userSchema.methods.generateRefreshToken= function(){
    return jwt.sign(
        {
            _id: this._id,
        },

        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model('User', userSchema);