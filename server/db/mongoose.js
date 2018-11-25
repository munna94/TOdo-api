const mongoose=require('mongoose');
//mongoose support callback by default means they return callback, to return as promises we use below line
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports={
  mongoose //this will return the mongoose object
};
