const mongoose = require("mongoose");
const schmea = mongoose.Schema({
  name: String,
  email: String,
  address: String,
  username: String,
  password: String
});

const userModel = mongoose.model('user',schmea)
module.exports = userModel