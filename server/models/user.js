var mongoose=require('mongoose');
//user mail validation
//note each new model is equivalent to new collection for mongodb
var User=mongoose.model('User',{
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  }
});

module.exports={User}
