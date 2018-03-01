var express = require('express')
var bordyParser = require('body-parser')
var {ObjectID} = require('mongodb')
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

app.listen(3000,()=>{
    console.log('started on port 3000')
})

module.exports = {
    app
}