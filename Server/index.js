import express from 'express'
import color from 'colors-cli'
import { getApi, postApi , deleteApi, patchApi, putApi} from './routs/routes.js'
import cors from "cors"
import dotenv from 'dotenv'
dotenv.config()

import dbConnection from "./model/dbConnection/dbConnection.js"

const app = express()

// Middlewares
app.use(cors())  // CORS MIDDLEWARES
app.use(express.json());  // JSON BODY PARSER

// EXPRESS ROUTER
const router = express.Router()
app.use('/api/v1', router)

// ALL ROUTES/ APIs
router.get('/get', getApi)
router.post('/post', postApi)
router.delete('/delete', deleteApi)
router.patch('/patch', patchApi)
router.put('/put', putApi)


dbConnection()
.then(()=>{
  app.listen(process.env.PORT, () => {
    console.log(color.green_b(`SERVER STARTED AT LOCALHOST/127.0.0.1 AT PORT :: ${process.env.PORT} `))
  })
}).catch( (error)=>{
  console.log(color.red_b(`DB CONNECTION ERROE :: ${error} :: PORT NUMBER ${process.env.PORT} `))
})

