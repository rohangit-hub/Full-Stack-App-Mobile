import express from 'express'
import color from 'colors-cli'
import { getApi, postApi , deleteApi, patchApi, putApi} from './routs/routes.js'
import cors from "cors"
import dotenv from 'dotenv'
dotenv.config()
import passport from "passport";
import { Strategy as localStrategy } from 'passport-local';
import dbConnection from "./model/dbConnection/dbConnection.js"
import {registration} from "./model/register.module.js"


// Middlewares
const app = express()
app.use(cors())  // CORS MIDDLEWARES
app.use(express.json());  // JSON BODY PARSER

// EXPRESS ROUTER
const router = express.Router()
app.use('/api/v1', router)

//AUTHENTICATION
passport.use(new localStrategy( async function(username, password, done) {

  try {
    console.log(`recieved credential : ${username}, ${password}`)
    const user = await registration.findOne({ Username : username })
    if(!user){return done(null , false , {message:"not user"})}
    const isPasswordMatch = await user.comparepassword(password);

    if(isPasswordMatch){
      return done(null, user)
    }else{
      return done(null, false , {message:"not user not pass"})
    }

  } catch (error) {
    console.log(`Error::-> ${error}`)
  }
}
));

app.use(passport.initialize());
const localAuthRouts = passport.authenticate('local', { session : false })


// ALL ROUTES/ APIs
router.get('/get',localAuthRouts, getApi)   // Login Routs
router.post('/post', postApi) // Registration Routs
router.delete('/delete',localAuthRouts, deleteApi)
router.patch('/patch',localAuthRouts, patchApi)
router.put('/put',localAuthRouts, putApi)

/*
{
    "Username":"rkt@1",
    "email":"rkt@.com",
    "password":"123456"
}
*/


dbConnection()
.then(()=>{
  app.listen(process.env.PORT, () => {
    console.log(color.green_b(`SERVER STARTED AT LOCALHOST/127.0.0.1 AT PORT :: ${process.env.PORT} `))
  })
}).catch( (error)=>{
  console.log(color.red_b(`DB CONNECTION ERROE :: ${error} :: PORT NUMBER ${process.env.PORT} `))
})

