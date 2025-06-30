import mongoose from "mongoose";

const workoutPlanSchema = new mongoose.Schema({
    trainerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trainer',
        required: true
    },
    exercises: [{
        type: String,
        required: true
    }],
    duration: {
        type: Number, // Duration in minutes
        required: true
    },
    level: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        required: true
    }
}, { timestamps: true });

export const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);