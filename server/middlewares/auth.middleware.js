const jwt = require("jsonwebtoken");
const config = require("config")
const jwtSecret = config.get('JWR_TOKEN');
const handler = require('../utils/responseHandler');
const { logger } = require("../helpers/logger.helper");


module.exports = async (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    if(!req.headers.authorization){
      // return res.status(401).json({success:false, message: "You are not authorized user, so... See you soon ✌" });
      return handler.negativeResponse(res, "You are not authorized user, so... See you soon ✌")
    }
    const token = req.headers.authorization.split(" ")[1]; // Bearer "TOKEN"
    if (!token) {
      // return res.status(401).json({success:false, message: "You are not authorized user, so... See you soon ✌" });
      return handler.negativeResponse(res, "You are not authorized user, so... See you soon ✌")
    }
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;

    next();
  } catch (e) {
    // res.status(401).json({ message: "Something is wrong. Try again!!!" });
      logger.error("AUTH MIDDLEWARE ERROR", e, {stack:"AUTH MIDDLEWARE"})
      return handler.negativeResponse(res, "Something is wrong. Try again!!!")
  }
};