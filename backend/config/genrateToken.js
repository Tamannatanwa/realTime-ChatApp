const jwt = require("jsonwebtoken")


const genrateToken = (id)=>{
    return jwt.sign({id},process.env.SEC_JWT,{
        expiresIn:"7d"
    })
}

module.exports = genrateToken;