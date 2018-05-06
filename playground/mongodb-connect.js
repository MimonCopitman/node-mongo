// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongo');
  }
  console.log('Connected to mongo');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   //   text: 'Something to do',
  //   //   completed: false
  //   // }, (err, result) => {
  //   //   if (err){
  //   //     return console.log('Unable to insert todo', err);
  //   //   }
  //   //
  //   //   console.log(JSON.stringify(result.ops));
  //   //
  //   // });

  db.collection('Users').insertOne({
    name: 'Andrew',
    age: 27,
    location: 'Hony Ha meagel 56'
  }, (err, result) => {
    if (err){
      return console.log('Unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  });

  client.close();

});