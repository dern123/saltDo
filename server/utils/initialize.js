const autoIncrement = require('mongoose-auto-increment');
const mongoose = require("mongoose");
const mongoUrl = require("config").get('mongoUri')
const connection = mongoose.createConnection(mongoUrl);
autoIncrement.initialize(connection);

console.log("Initialize Auto Increment: ", mongoose.connection.readyState);

module.exports = autoIncrement;