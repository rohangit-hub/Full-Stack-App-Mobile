import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {type: "string", unique: true},
    password: {type: "string"}

}, {timestamps:true});


// MODEL
export const user = mongoose.model('user',userSchema);