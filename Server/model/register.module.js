import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
    Username: {type: "string"},
    email: {type: "string"},
    password: {type: "string"}

}, {timestamps:true});


// MODEL
export const registration = mongoose.model('registration',registrationSchema);