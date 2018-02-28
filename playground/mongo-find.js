const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/',
(err,client)=>{
 if(err){
     console.log('Unable to connect to mongoDB Server')
 }
      var db = client.db('TodoApp');
      db.collection('Todos').find().count().then((count)=>{
          console.log(JSON.stringify(count))
      },(err)=>{
        return  console.log('enable to fetch data',err);
      }) ;

     client.close(); 
});