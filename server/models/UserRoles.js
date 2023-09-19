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
                // leads:{
                //     access: {type: Boolean, default: true},
                //     action: {
                //         create: {type: Boolean, default: true},
                //         update: {type: Boolean, default: true},
                //         read: {type: Boolean, default: true}
                //     }
                // },
                // clicks:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // offers:{
                //     access: {type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: true},
                //         update: {type: Boolean, default: true},
                //         read: {type: Boolean, default: true}
                //     }
                // },
                // streams:{
                //     access: {type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // partners:{
                //     access: {type:Boolean, defalut:false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // integrations:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // capa:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // users:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // roles:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // leadsstatus:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // finances:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // statistics:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // news:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // contacts:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // teams:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // teamStatistics:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // teamStreams:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // teamLeads:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // teamSpends:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // teamClicks:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // buyingstat:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // "system-settings":{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // system:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // importLeads:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // KPI:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // sources:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // sourcesGroup:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // },
                // accounts:{
                //     access:{type: Boolean, default: false},
                //     action: {
                //         create: {type: Boolean, default: false},
                //         update: {type: Boolean, default: false},
                //         read: {type: Boolean, default: false}
                //     }
                // }
            }
        },
        client:{
            access: {type: Boolean, default: true},
            client: {
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
                    // offers:{
                    //     access: {type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // streams:{
                    //     access: {type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // leads:{
                    //     access: {type: Boolean, default: true},
                    //     action: {
                    //         create: {type: Boolean, default: true},
                    //         update: {type: Boolean, default: true},
                    //         read: {type: Boolean, default: true}
                    //     }
                    // },
                    // clicks:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // statistics:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // news:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // finances:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // team:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // teamStatistics:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // teams:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // teamStreams:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // teamLeads:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // teamSpends:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // teamClicks:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // buyingstat:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // KPI:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // sources:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // accounts:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // },
                    // sourcesGroup:{
                    //     access:{type: Boolean, default: false},
                    //     action: {
                    //         create: {type: Boolean, default: false},
                    //         update: {type: Boolean, default: false},
                    //         read: {type: Boolean, default: false}
                    //     }
                    // }
                },
            },
        }
    },
    userId: {type: Types.ObjectId, ref: "Users", default: null}
}, { timestamps: true });

schema.plugin(autoIncrement.plugin, { model: 'user_roles', field: 'id' });

module.exports = model("user_roles", schema);
