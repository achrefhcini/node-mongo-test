const express = require('express')
const bordyParser = require('body-parser')
const {ObjectID} = require('mongodb')
const _=require('lodash');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');

var app=express();

app.use(bordyParser.json());
// POST /todos
app.post('/todos',(req,res)=>{
  var todo = new Todo({
      text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
     res.status(400).send(e);
  }); 
})
// GET /todos
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
     res.send({todos,code:8754})
    },(e)=>{
           res.status(400).send(e);

    })
})

// GET /todos/1920
app.get('/todos/:id',(req,res)=>{
    var id = req.params.id
    if(!ObjectID.isValid(id)){
        return res.status(400).send()
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(201).send({error:'Data not found'})
        }
        res.send({todo,code:200})
    })
})
// DELETE /todos/1920
app.delete('/todos/:id',(req,res)=>{
        var id = req.params.id

    if(!ObjectID.isValid(id)){
        return res.status(400).send()
    }
    Todo.findByIdAndRemove(id).then((result)=>{
        if(!result){
      return res.status(202).send({error:'cannt remove'})

        }
        res.send({result,code:200})
    })
})
// PATCH
app.patch('/todos/:id',(req,res)=>{
   var id = req.params.id
   var body = _.pick(req.body,['text','completed'])
  if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }
  if(_.isBoolean(body.completed)&& body.completed){
     body.completedAt = new Date().getTime() ;
  }
  else{
        body.completed=false;
        body.completed=null;
  }
  Todo.findByIdAndUpdate(id,{
      $set:body
  },{
   new:true
  }).then((todo)=>{
      if(!todo){
          return res.status(404).send()
      }
      res.send(todo);
  }).catch((r)=>{
      console.log(r)
  })
})


app.listen(3000,()=>{
    console.log('started on port 3000')
})

module.exports = {
    app
}