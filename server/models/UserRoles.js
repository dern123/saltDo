const { Schema, model, Types} = require("mongoose");
const autoIncrement = require('../utils/initialize');


const schema = new Schema({
    name:          {type: String, required: true},
    color:         {type: String, required: false},
    title:         {type: String},
    default:       {type: Boolean, default: false},
    permissions:   {
        admin:{
            access: {type: Boolean, default: false},
            modules:{
                dashboard:{
                    access: {type: Boolean, default: true},
                    action: {
                        create: {type: Boolean, default: true},
                        update: {type: Boolean, default: true},
                        read: {type: Boolean, default: true}
                    }
                },
                "systemSettings":{
                    access:{type: Boolean, default: false},
                    action: {
                        create: {type: Boolean, default: false},
                        update: {type: Boolean, default: false},
                        read: {type: Boolean, default: false}
                    }
                },
                system:{
                    access:{type: Boolean, default: false},
                    action: {
                        create: {type: Boolean, default: false},
                        update: {type: Boolean, default: false},
                        read: {type: Boolean, default: false}
                    }
                },
                todo:{
                    access:{type: Boolean, default: true},
                    action: {
                        create: {type: Boolean, default: false},
                        update: {type: Boolean, default: false},
                        read: {type: Boolean, default: false}
                    }
                },
                roles:{
                    access:{type: Boolean, default: false},
                    action: {
                        create: {type: Boolean, default: false},
                        update: {type: Boolean, default: false},
                        read: {type: Boolean, default: false}
                    }
                }
            }
        },
        client:{
            access: {type: Boolean, defalut: true},
            modules:{
                dashboard:{
                    access: {type: Boolean, default: false},
                    action: {
                        create: {type: Boolean, default: false},
                        update: {type: Boolean, default: false},
                        read: {type: Boolean, default: false}
                    }
                },
                "systemSettings":{
                    access:{type: Boolean, default: false},
                    action: {
                        create: {type: Boolean, default: false},
                        update: {type: Boolean, default: false},
                        read: {type: Boolean, default: false}
                    }
                },
                system:{
                    access:{type: Boolean, default: false},
                    action: {
                        create: {type: Boolean, default: false},
                        update: {type: Boolean, default: false},
                        read: {type: Boolean, default: false}
                    }
                },
                todo:{
                    access:{type: Boolean, default: true},
                    action: {
                        create: {type: Boolean, default: false},
                        update: {type: Boolean, default: false},
                        read: {type: Boolean, default: false}
                    }
                }
            },
        }
    },
    userId: {type: Types.ObjectId, ref: "Users", default: null}
}, { timestamps: true });

schema.plugin(autoIncrement.plugin, { model: 'user_roles', field: 'id' });

module.exports = model("user_roles", schema);
