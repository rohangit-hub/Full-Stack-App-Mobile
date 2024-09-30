// import user from "../model/user.module.js"
import {registration} from "../model/register.module.js";


// GET API
const getApi = (req,res) =>{
    res.send({"api": "get"})
}

// POST API
const postApi = (req,res) =>{
    const userRegister = new registration(req.body)
    userRegister.save()
    res.status(200).send({
        "success": true,
        "message": "User Register into the database "
    })
    // console.log(userRegister)
}

// DELETE API
const deleteApi = (req,res) =>{
    res.send({"api": "delete"})
}

// PATCH API
const patchApi = (req,res) =>{
    res.send({"api": "patch"})
}

// PUT API
const putApi = (req,res) =>{
    res.send({"api": "put"})
}


export { getApi, postApi , deleteApi, patchApi, putApi}