 const {mongoose} = require('./../server/db/mongoose')
 const {Todo} = require('../../server/models/todo')
 const {ObjectID} = require('mongodb');

 var id ='5a97483b959a193e50b41ac9'
 if(!ObjectID.isValid(id)){
     console.log('ID not valid');
 }
 Todo.find({
     _id:id
 }).then((todos)=>{
    console.log(todos)
 })

 Todo.findOne({
     _id:id
 }).then((todo)=>{
    console.log(todo)
 })

 Todo.findById(id).then((todo)=>{
     if(!todo){
         return console.log(' Id not found')
     }
    console.log(todo)
 }).catch((e)=>{
    console.log(e)
 })