const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const router = express.Router();
const url =
  'mongodb+srv://nicorema:1RbdnZnHXygD3Bfr@cluster0-wknbo.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(url);

const locationStorage = {
  locations: [],
};
router.post('/add-location', (req, res, next) => {
  client.connect(function (err, client) {
    if (err) {
      console.error('An error occurred connecting to MongoDB: ', err);
      return;
    }
    console.log('Connected correctly to server');
    const db = client.db('locations');
    db.collection('inserts').insertOne(
      {
        address: req.body.address,
        coords: { lat: req.body.lat, lng: req.body.lng },
      },
      function (err, r) {
        console.log(r);
        res.json({ mesage: 'Stored Location!', id: r.insertedId });
      }
    );
  });
});
router.get('/location/:id', (req, res, next) => {
  const id = req.params.id;
  client.connect(function (err, client) {
    if (err) {
      console.error('An error occurred connecting to MongoDB: ', err);
      return;
    }
    console.log('Connected correctly to server');
    const db = client.db('locations');
    db.collection('inserts').findOne(
      {
        _id: new mongodb.ObjectID(id),
      },
      function (err, doc) {
        if (!doc) {
          return res.status(404).json({ message: 'Not found' });
        } else {
          res
            .status(200)
            .json({ address: doc.address, coords: doc.coords });
        }
      }
    );
  });
});

module.exports = router;
