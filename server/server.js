var express=require('express');
var {ObjectId}=require('mongodb')
//to send json to server
var bodyparser=require('body-parser');

var {mongoose}=require('./db/mongoose');

var {Todo}=require('./models/todo');
var {User}=require('./models/user')


var app=express();
//it is middleware. if we won't give then it won't understand the json input given by postman inside the body
app.use(bodyparser.json());

app.post('/todos',(req,res)=>{

  //this is making document. only field contains is model is inserted into db. means if we give more field then it won't
  //throw any error but only the number of field which defined in model is inserted and if we give multiple time same
  //field for ex text fied two times then the latest field definition will be inserted.
  var todo=new Todo({
    text:req.body.text //if we give number or other datatype the  it will typecast to string then it will insert
  });

  todo.save().then((doc)=>{
   res.send(doc);

  },(err)=>{
    res.status(400).send(err);

  });


});


app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
     res.send({todos})
  },(error)=>{
    res.status(400).send(e);

  });

});




//retrieve by id

app.get('/todos/:id',(req,res)=>{
var id=req.params.id;
if(!ObjectId.isValid(id)){
  res.status(404).send();

}
Todo.findById(id).then((todos)=>{
 if(!todos){
   res.status(404).send();
 }
 res.send({todos })
}).catch((e)=>{
  res.status(400).send();
});

});



app.listen(3000,()=>{
  console.log('server started at port 3000');
})





// var user=new User({
//
// });
// user.save().then((doc)=>{
//   console.log(`inserted :`${doc});
// },(error)=>{
//   console.log('error ha');
// });
