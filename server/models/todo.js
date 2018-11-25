var mongoose=require('mongoose');
//first parameter is model name and second is schema and third is optional,which is collection name if we won't give
//then first parameter which is model name, plural will be collection name

var Todo=mongoose.model('Todo',{
text:{
  //these all are validator before inserting into db
  type:String,
  required:true,// means when we insert then this field must be mention,without this field we can't insert
  minlength:1,//means we can't insert null string , minimum length of string should be 1
  trim:true,//this trim the whitespace in begining and end of the string
},
completed:{
  type:Boolean,
  default:true//if we won't give this filed while inserting then default value true will be inserted
},
completedAt:{
  type:Number,
  default:100//default 100 will inserted
}

},'TodoCollection');

module.exports={Todo}//equivalent to Todo=Todo
