const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongo');
  }
  console.log('Connected to mongo');

  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //    console.log(result);
  //  });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Mimon Copitman'}).then((result) => {
     console.log(result);
   });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5aef5359e33ede4a0f7a6977')}).then((result) => {
    console.log(result);
  });

  // client.close();

});