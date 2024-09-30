import mongoose from "mongoose"
import color from 'colors-cli'

const dbConnection = async ()=>{
    try {
        const connectionString = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(color.cyan_b(`DB CONNECTED WITH THE HOST --> ${connectionString.connection.host} `))
        
    }catch (error) {
        console.log(color.red_b(`DB CONNECTION ERROE ${error} `))
    }
}

export default dbConnection;
