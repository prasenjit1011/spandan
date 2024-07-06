const mongodb     = require('mongodb');
const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/Mydb?retryWrites=true&w=majority";
let _db;

const mongoConnect = callback => {
  MongoClient.connect(uri)
    .then(client => {
      console.log('-: MongoDB Connected! :-');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    console.log('-: DB Found :-');
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;