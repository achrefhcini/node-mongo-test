const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/',
(err,client)=>{
 if(err){
     console.log('Unable to connect to mongoDB Server')
 }
      var db = client.db('TodoApp');
    // deletmany
        /*  db.collection('Todos').deleteMany({
            text:'Achref'
        }).then((result)=>{
            console.log(result)
        }) */
    //delet One
        /*  db.collection('Todos').deleteOne({text:'Achref'})
            .then((resut)=>{
                console.log(result);
            }) */
      //find one delete
        /* db.collection('Todos').findOneAndDelete({completed:false})
        .then((result)=>{
            console.log(result)
        }) */

     client.close(); 
});