const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/',
(err,client)=>{
 if(err){
     console.log('Unable to connect to mongoDB Server')
 }
      var db = client.db('TodoApp');
      db.collection('Todos').findOneAndUpdate({
           _id:new ObjectID('5a972d27ddf98e0d84119a89')
      },{
          $set:{
              completed:true
          }
      },{
          returnOriginal:false
      }).then((result)=>{
          console.log(result);
      })

     client.close(); 
});