const {Schema, Types, model} = require("mongoose");

const autoIncrement = require('../utils/initialize');

const schema = new Schema({
    name: {type: String, require:true, uppercase: true},
    discription: {type: String, require: false},
    lenguage: {type: String, require: true},
    userId: {type: Types.ObjectId, ref: "Users"},
    userCreated: {type: Types.ObjectId, ref: "Users"},
    createdAt:    {type:Date, default: new Date()},
    updatedAt:    {type:Date, default: new Date()},
},{timestamps:true});

schema.plugin(autoIncrement.plugin, { model: "Todo", field: id});

module.exports = model("Todo", schema);
