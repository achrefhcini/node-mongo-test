 const {mongoose} = require('./../server/db/mongoose')
 const {Todo} = require('../../server/models/todo')
 const {ObjectID} = require('mongodb');

 var id ='5a97483b959a193e50b41ac9'
 if(!ObjectID.isValid(id)){
     console.log('ID not valid');
 }


Todo.remove({}).then((result)=>{
    console.log(result);
})

//Todo.findOneAndRemove()
//TodO.findByIdAndRemove()
Todo.findByIdAndRemove(id).then((result)=>{
    console.log(id);
})

