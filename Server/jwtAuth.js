import jwt from "jsonwebtoken";

export const jwtToken = async (req,res,next)=>{

    // CHECK REQUEST HEADERS ARE AUTHORIZED OR NOT
    const authorized = req.headers.authorization
    if(!authorized) return res.status({error: "Invalid Authorization Token"})

    // extract the token
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({error : "Unauthorized"})
    
    try {
        // Veryfy the JWT Token
        const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Attach user information to the request
        req.userPayload = decodedData
        next()
        
    } catch (error) {
        console.log(error);
        res.status(401).json({error: "Invalid Token"})
    }
}

export const jwtTokenGenerate = async (payload)=>{

    // generate JWT Token
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '2h' })

}



