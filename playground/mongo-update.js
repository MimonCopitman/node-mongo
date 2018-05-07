const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongo');
  }
  console.log('Connected to mongo');

  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //     _id: new ObjectID('5aef403d36f6bb47b53b2dd7')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   },
  //   {returnOriginal: false}
  // ).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5af0563538a35753a7bf50f1')
    }, {
      $set: {name: 'Mimon Copitman'},
      $inc: {age: 1}
    },
    {returnOriginal: false}
  ).then((result) => {
    console.log(result);
  });

  // client.close();

});