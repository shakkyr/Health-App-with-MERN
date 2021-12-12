const mongoose = require('mongoose');

const EmergencySchema = new mongoose.Schema( {
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    location: {
        type: Object,
    },
},
{ timestamps: true }
);

const Emergency = mongoose.model('Emergency', EmergencySchema);

module.exports = Emergency;