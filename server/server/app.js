const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const app = express();
const PORT = 3005;
//скопируй ссылку в mongoDB Compas
const uri =
  'mongodb+srv://Anor:123qweasd@cluster0-v0ttf.mongodb.net/test?retryWrites=true&w=majority';
const client = mongoose.connect(uri, { useNewUrlParser: true });
/*client.connect(err => {
  const directors = client.db("test").collection("directors");
  const movies = client.db("test").collection("movies");
  // perform actions on the collection object
  client.close();
});*/

const dbConnection = mongoose.connection;
dbConnection.on('error', (err) => console.log(`error DB ${err}`));
dbConnection.once('open', () => console.log(`DB connect done`));
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(PORT, (err) => {
  err ? console.log(error) : console.log('Server start');
});
