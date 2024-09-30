import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
    name: "string",
    email: "string",
    password: "string"

}, {timestamps:true});


// MODEL
export const registration = mongoose.model('registration',registrationSchema);