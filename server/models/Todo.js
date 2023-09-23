const {Schema, Types, model} = require("mongoose");

const autoIncrement = require('../utils/initialize');

const schema = new Schema({
    title:            {type: String, default: "", require:false, uppercase: true},
    discription:      {type: String, default: "", require: false},
    status:           {type: Types.ObjectId, default: null, ref: "Status_todo"},
    userSingleId:     {type: Types.ObjectId, ref: "Users"},
    userId:           {type: Types.ObjectId, ref: "Users"},
    userCreatedId:    {type: Types.ObjectId, ref: "Users"},
    categories:       [{
        categoriesId:     {type: Types.ObjectId, ref: "Categories_todo"},
        accepted:         {type: Boolean, default: false},
        createdAt:        {type: Date, default: new Date()},
    }],
    assigns:          [{
        userId:           {type: Types.ObjectId, ref: "Users"},
        accepted:         {type: Boolean, default: false},
        createdAt:        {type: Date, default: new Date()},
    }],
    teamId:           {type: Types.ObjectId, default: null, ref: "Teams"},
    createdAt:        {type:Date, default: new Date()},
    updatedAt:        {type:Date, default: new Date()},
},{timestamps:true});

schema.plugin(autoIncrement.plugin, { model: "Todo", field: id});

module.exports = model("Todo", schema);
