// import user from "../model/user.module.js"
import passport from "passport";
import { registration } from "../model/register.module.js";
import { jwtTokenGenerate } from "../jwtAuth.js";

// GET API
const getApi = async (req, res) => {
  const bodyData = req.body;

  if (!bodyData || null) {
    res.send({ Message: "Please enter valid Email or Password !" });
  } else {
    const userData = await registration
      .findOne({ username: bodyData.username })
      .exec();

    if (userData === null) {
      res.send({ response: "Please check the email or Password !" });
    } else if (userData.username == bodyData.username) {
      const matchPassword = await userData.comparepassword(bodyData.password);

      if (matchPassword == true) {
        const payload = {
          id: userData.id,
          username: userData.username,
        };
        // JWT GENERATE Token
        const token = await jwtTokenGenerate(payload);

        res.send({ "response Pass": bodyData, userData, token, payload });
      } 
      else {
        res.send({ "Password match Response": matchPassword });
      }
    } 
    else {
      res.send({ response: "Please check the email or Password !" });
    }
  }
};



// POST API
const postApi = async (req, res) => {
  const userRegister = new registration(req.body);
  userRegister.save();

  //JWT payload
  const payload = {
    id: userRegister.id,
    username: userRegister.username,
    email: userRegister.email,
    password: userRegister.password,
  };

  // JWT GENERATE Token
  const token = await jwtTokenGenerate(payload);

  res.status(200).send({
    success: true,
    message: `User: ${userRegister.username} Register into the database `,
    JWT: token,
  });
};

// DELETE API
const deleteApi = (req, res) => {
  
  res.send({ api: "delete" });
};

// PATCH API
const patchApi = (req, res) => {
  res.send({ api: "patch" });
};

// PUT API
const putApi = (req, res) => {
  res.send({ api: "put" });
};

export { getApi, postApi, deleteApi, patchApi, putApi};
