const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongo');
  }
  console.log('Connected to mongo');

  const db = client.db('TodoApp');

  db.collection('Todos').find({completed: false}).toArray().then( (docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs));
  }, (err) => {
    console.log('Unable to fetch Todos');
  });

  // client.close();

});