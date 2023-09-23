const { Schema, model, Types } = require("mongoose");

const autoIncrement = require("../utils/initialize");

const schema = new Schema ({
    name:                 {type: String, unique:true},
    headsMemberObject:    [{
        userId:              {type: Types.ObjectId, ref: "Users"},
        accepted:            {type: Boolean, default: false},
        createdAt:           {type: Date, default: new Date()},
   }],
   membersObject:         [{
        userId:              {type: Types.ObjectId, ref: "Users"},
        accepted:            {type: Boolean, default: false},
        createdAt:           {type: Date, default: new Date()},
   }],
   active:                {type: Boolean, default: true},
   userCreateId:          {type: Types.ObjectId, ref: "Users"},
}, { timestamps: true});

schema.plugin( autoIncrement.plugin, { model: "Status_todo", field: "id"});

module.exports = model("Status_todo", schema)