import mongoose,{Schema} from "mongoose";


const trainerSchema = new Schema({
    memberId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    specialization: {
        type: String,
        required: true,
        trim: true
    },
},{timestamps: true});


export const Trainer = mongoose.model('Trainer', trainerSchema);