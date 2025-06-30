import mongoose, { Schema } from "mongoose";

const membershipSchema = new Schema({
    membershipType: {
        type: String,
        enum: ['basic', 'premium', 'gold'],
        required: true
    },
    duration: {
        type: Number, // Duration in months
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    benefits: {
        type: [String], // Array of benefits
        required: true
    }
},{timestamps: true});

export const Membership = mongoose.model('Membership', membershipSchema);