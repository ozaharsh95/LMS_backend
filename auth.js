const jwt = require('jsonwebtoken')
const JWT_SECRET = 'your-secret-key';

const auth = (req,res,next) => {
    try{
        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token,JWT_SECRET);
            req.username = user.username;
        }else{
            res.status(401).json({message:"Unauthorized User"});
        }
        next();
    }catch(error){
        console.log(error);
        res.status(401).json({message:"Unauthorized User"});
    }
    

}

module.exports = auth;