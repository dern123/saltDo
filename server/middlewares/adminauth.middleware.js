const jwt = require("jsonwebtoken");
const config = require("config");
const { logger } = require("../helpers/logger.helper");
const jwtSecret = config.get('JWR_TOKEN');

module.exports = async (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    if(!req.headers.authorization){
      return res.status(401).json({success:false, message: "You are not authorized admin, so... See you soon ✌" });
    }
    const token = req.headers.authorization.split(" ")[1]; // Bearer "TOKEN"
    if (!token) {
      return res.status(401).json({success:false, message: "You are not authorized admin, so... See you soon ✌" });
    }
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;

    const userRole = req.user.role


    if(userRole.toUpperCase() === "ADMIN"){
        next();
    }else{
        return res.status(401).json({success:false, message: "You are no access, so... See you soon ✌" })
    }

  } catch (e) {
    logger.error("ADMINAUTH MIDDLEWARE ERROR", e, {stack:"ADMINMIDDLEWARE"})
    res.status(401).json({ message: "Something is wrong. Try again!!!" });
  }
};