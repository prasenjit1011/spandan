const mongodb   = require('mongodb');
const getDb     = require('../util/database').getDb;

class Shop {
  constructor(name, address, imageUrl) {
    this.name = name;
    this.address = address;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db
      .collection('customers')
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('customers')
      .find()
      .toArray()
      .then(products => {
        //console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchDetails(id){
    const db = getDb();
    return db
      .collection('customers')
      .findOne({_id: new mongodb.ObjectId(id)})
      .then(products => {
        //console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Shop;
