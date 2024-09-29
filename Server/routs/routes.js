// GET API
const getApi = (req,res) =>{
    res.send({"api": "get"})
}

// POST API
const postApi = (req,res) =>{
    res.send({"api": "post"})
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


export  { getApi, postApi , deleteApi, patchApi, putApi}