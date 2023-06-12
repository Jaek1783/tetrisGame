const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
  name:{
    type:String,
    required:true   
  },
  score:{
    type:Number,
    required:true
  },
  duration:{
    type:Number,
    required:true
  }
},{collection:'rangking'})

module.exports = mongoose.model("User", userSchema);
    