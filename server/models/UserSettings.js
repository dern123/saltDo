const {Schema, model, Types} = require('mongoose');
const autoIncrement = require('../utils/initialize');

const schema = new Schema({
    userId:     {type:Types.ObjectId, ref: 'Users'},
    theme:      {
        colorText:    {type:String, default: ''},
        colorTheme:   {type:String, default: ''},
        createdAt:    {type:Date, default: new Date()},
        updatedAt:    {type:Date, default: new Date()},
    }
}, { timestamps: true });

schema.plugin(autoIncrement.plugin, { model: 'UserSettings', field: 'id' });

module.exports = model("UserSettings", schema);