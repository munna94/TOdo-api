const Mongoclient=require('mongodb').MongoClient;
Mongoclient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,db)=>{

if(err){
  console.log('error while connecting database');
}

console.log('connected to database successfully');

db.collection('Todo').insertOne({
  name:'munna1',
  id:'bpss263'
},(err,result)=>{
if(err){
  return console.log('unable to insert',err);
}
console.log(JSON.stringify(result.ops));

});
db.close();

});
