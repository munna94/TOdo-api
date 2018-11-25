const {ObjectId}=require('mongodb')

const {mongoose}=require('../server/db/mongoose');
const {Todo}=require('../server/models/todo');
var id='5bfa75b3984d62313226534f';

//to check either this mongo object id is valid or // NOTE:
if(!ObjectId.isValid(id)){
  console.log('id is not valid....');
}

//this will return arrays of one document
Todo.find({_id:id}).then((todos)=>{
  console.log(todos);
},(err)=>{
  console.log(err);
});

//this will return one document as a dictionary

Todo.findOne({_id:id}).then((todos)=>{
  console.log(todos);
},(err)=>{
  console.log('error is'+err);
});

//search by // id same as above

Todo.findById(id).then((todos)=>{
  //to check searching is null or not
  if(!todos){
    console.log('id not found in the database ');
  }

  console.log('by id '+todos);
}).catch((err)=>{
  console.log(err);
});
