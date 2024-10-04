// import user from "../model/user.module.js"
import {registration} from "../model/register.module.js";



// GET API
const getApi = async (req,res) =>{
    const bodyData = req.body;

    if(!bodyData || null){
        res.send({"Message" : "Please enter valid Email or Password !"})
    }
    else{
        const userData = await registration.findOne({ email: bodyData.email }).exec();

        if(userData === null){
            res.send({"response": "Please check the email or Password !"})
        } 
        else if(userData.email == bodyData.email){

            const matchPassword = await userData.comparepassword(bodyData.password);

            if(matchPassword == true){
                res.send({"response Pass": bodyData, userData})
            }else{
                res.send({"Password match Response": matchPassword})
            }

        } 
        else {
            res.send({"response": "Please check the email or Password !"})
        }

    }

    
}

// POST API
const postApi = (req,res) =>{
    const userRegister = new registration(req.body)
    userRegister.save()
    res.status(200).send({
        "success": true,
        "message": `User: ${userRegister.Username} Register into the database `,
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