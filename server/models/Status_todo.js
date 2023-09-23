const { Schema, model, Types } = require("mongoose");

const autoIncrement = require("../utils/initialize");

const schema = new Schema ({
    title:           {type: String, require: true},
    userSingleId:    {type: Types.ObjectId, ref: "Users"},
    userId:          {type: Types.ObjectId, ref: "Users"},
    userCreatedId:    {type: Types.ObjectId, ref: "Users"},
    active:          {type: Boolean, default: true, require: true},
    teamId:          {type: Types.ObjectId, default: null, ref: "Team"},
    color:           {type: String, default: 'transparent'},
}, { timestamps: true});

schema.plugin( autoIncrement.plugin, { model: "Status_todo", field: "id"});

module.exports = model("Status_todo", schema)