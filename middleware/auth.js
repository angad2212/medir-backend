const jwt = require('jsonwebtoken');
const authFunction = (req, res, next)=>{
    //take the token from teh request
    const token = req.headers.authorization?.split(" ")[1]; //split bearer from token
    //[1] is used to extract second element 

    if(!token){
        res.status(401).json({
            error: "Access Denied"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; //decoded had user info retreived from teh token
        next(); //moves on to the main route
    } catch (error) {
        res.status(400).json({ error: "Invalid token" });
    }
}

module.exports = authFunction;