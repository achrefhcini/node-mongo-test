/* const MongoClient = require('mongodb').MongoClient;
 */
const {MongoClient,ObjectID} = require('mongodb');

/* var obj = new ObjectID();
console.log(obj); */

/* var user ={name:'Achref',
          age:25};
var {name} = user;
 console.log(name); */
MongoClient.connect('mongodb://localhost:27017/',
(err,client)=>{
 if(err){
     console.log('Unable to connect to mongoDB Server')
 }
      var db = client.db('TodoApp');

   /* console.log('Connected to MongoDB Server')  ;

     db.collection('Todos').insertOne({
         text:'Something to do',
         completed:false
     },(err,result)=>{
     if(err){
        return console.log('Unable TO INSERT todo',err)
     }
    console.log(JSON.stringify(result.ops,undefined,2))
     }); */
    /*    db.collection('Users').insertOne({
           name:'Achref',
           age:25,
           location:'Tunisia'
    },(err,result)=>{
        if(err){
            return console.log('Unable to add user',err)
        }
        console.log(JSON.stringify(result.ops,undefined,2))
    })    */
     client.close(); 
});