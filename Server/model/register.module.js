import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const registrationSchema = new mongoose.Schema({
    Username: {type: "string", unique : true},
    email: {type: "string"},
    password: {type: "string"}

}, {timestamps:true});

// Hashing Password field. // Dost use arrow as a callback
registrationSchema.pre('save', async function(next) {
    const person = this;

    // DOnst Save if password fiels is modified 
    if(!person.isModified('password')) return next();

    // If password modified
    try {

        // Salt Generation
        const salt = await bcrypt.genSalt(10);

        // password hash generate
        const hashedPassword = await bcrypt.hash(person.password , salt)

        // swap hashed password with normal password
        person.password = hashedPassword;
        
    } catch (error) {
        return next(`Person not hashed: ${error}`);
    }
})

registrationSchema.methods.comparepassword = async function(userPassword){
        
        // compare password
        try {
            // compare password with Bcrypt
            const isMatched = await bcrypt.compare(userPassword , this.password)
            console.log(userPassword , typeof(userPassword))
            console.log(this.password , typeof(this.password))
            console.log(isMatched)
            return isMatched;
            
        } catch (error) {
            console.log(error)
        }
    
}

// MODEL
export const registration = mongoose.model('registration',registrationSchema);