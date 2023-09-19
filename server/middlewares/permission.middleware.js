const handler = require("../utils/responseHandler")
// const logger = require("../helpers/logger.helper")
module.exports = async (req, res, next) => {
  try {
    const splitUrl = req.originalUrl.split("/")
    const apiRole = splitUrl[2]
    const apiModule = splitUrl[3]

    const userPermission = req?.session?.user?.permissions
    const role = req.user.role

    if(role.toUpperCase() == "ROOT" || role.toUpperCase() == "ADMIN"){
      return next();
    }

    if(!userPermission){
      return handler.negativeResponse(res, {message:"Access denied!"})
    }

    if(!userPermission[apiRole].access){
      return handler.negativeResponse(res, {message:"Access denied!"})
    }

    if(!userPermission.admin.access){
      if(!userPermission[apiRole][apiModule].modules[[splitUrl[4]]].access){
        return handler.negativeResponse(res, {message:"Access denied!"})
      }
    }

    //next step add type edit (read/create/update)

    next();
  } catch (e) {
    console.log(e)
    // logger.error(e, "PERRMISSION ERROR", {stack: "PERMISSION"})
    return handler.negativeResponse(res, "Something is wrong. Try again!!! ")
  }
};
