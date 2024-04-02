const mongoose = require("mongoose");
const schmea = mongoose.Schema({
    
    title:String,
    post:String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date(),
      },
});

const postModel = mongoose.model('post',schmea)
module.exports = postModel