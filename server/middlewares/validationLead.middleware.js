const LeadModel = require("../models/Leads")

module.exports = async(req,res,next) => {
    if (req.method === "OPTIONS") {
        return next();
    }
    return next()
}