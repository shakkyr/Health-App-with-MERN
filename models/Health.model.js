const mongoose = require('mongoose');

const feelingSchema = new mongoose.Schema(
    {
        feeling: {
            type: String,
            required: true,
        },
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    {timestamps:true}
);
const Feeling = mongoose.model('Feeling', feelingSchema)



const sleepingSchema = new mongoose.Schema(
    {
        sleeping: {
            type: String,
            required: true,
        },
        patient:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    {timestamps:true}
);
const Sleeping = mongoose.model('Sleeping', sleepingSchema)



const waterSchema = new mongoose.Schema(
    {
        water: {
            type: String,
            required: true,
        },
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    {timestamps:true}
);
const Water = mongoose.model('Water', waterSchema)



const workoutSchema = new mongoose.Schema(
    {
        workout: {
            type: String,
            required: true,
        },
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    {timestamps:true}
);
const Workout = mongoose.model('Workout', workoutSchema)



module.exports = {
    Feeling,
    Sleeping,
    Workout,
    Water
}