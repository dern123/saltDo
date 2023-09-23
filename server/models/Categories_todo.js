const { Schema, model, Types } = require("mongoose");

const autoIncrement = require("../utils/initialize");

const schema = new Schema ({
    title:           {type: String, require: true},
    userSingleId:    {type: Types.ObjectId, ref: "Users"},
    userId:          {type: Types.ObjectId, ref: "Users"},
    userCreatedId:   {type: Types.ObjectId, ref: "Users"},
    active:          {type: Boolean, default: true, require: true},
    teamId:          {type: Types.ObjectId, ref: "Team"},
    color:           {type: String, default: 'transparent'},
}, { timestamps: true});

schema.plugin( autoIncrement.plugin, { model: "Categories_todo", field: "id"});

module.exports = model("Categories_todo", schema)