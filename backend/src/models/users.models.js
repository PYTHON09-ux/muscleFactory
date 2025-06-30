import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
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
    password: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
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
        type: String,
        enum: ['basic', 'premium', 'gold'],
        default: 'basic'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    
},{timestamps: true});



export const User = mongoose.model('User', userSchema);