import express from 'express'
import { getApi, postApi , deleteApi, patchApi, putApi} from './routs/routes.js'
import cors from "cors"

const app = express()
const port = 3000

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





app.listen(port, () => {
  console.log(`Server Started at localhost/127.0.0.1 with port ${port}...`)
})