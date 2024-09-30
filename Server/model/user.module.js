import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: "string",
    password: "string"

}, {timestamps:true});


// MODEL
export const user = mongoose.model('user',userSchema);