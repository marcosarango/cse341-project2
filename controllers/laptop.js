const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  //#swagger.tags=['Users']
  mongodb
    .getDb()
    .db()
    .collection('laptop')
    .find()
    .toArray((err, lists) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);


    // const result = await mongodb.getDatabase().db().collection('users').find();
    // result.toArray().then((users) => {
    //     res.setHeader('Content-Type', 'application/json');
    //     res.status(200).json(users);
    });

};

const getSingle = async (req, res) => {
  //#swagger.tags=['Users']
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid contact id to find a contact.');
  }
    const userId = new ObjectId(req.params.id);
    mongodb
    .getDb()
    .db()
    .collection('laptop')
    .find({ _id: userId })
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result[0]);







    // const result = await mongodb.getDatabase().db().collection('users').find({ _id: userId });
    // result.toArray().then((users) => {
    //     res.setHeader('Content-Type', 'application/json');
    //     res.status(200).json(users[0]);

    });

};


const createLaptop = async (req, res) => {
    //#swagger.tags=['Users']
      const user = {
          email: req.body.email,
          username: req.body.username,
          name: req.body.name,
          ipaddress: req.body.ipaddress
        };
        const response = await mongodb.getDatabase().db().collection('laptop').insertOne(user);
        if (response.acknowledged) {
          res.status(204).send();
        } else {
          res.status(500).json(response.error || 'Some error occurred while updating the user.');
        }
  };

  const updateLaptop = async (req, res) => {
    //#swagger.tags=['Users']
     const userId = new ObjectId(req.params.id);
      const user = {
          email: req.body.email,
          username: req.body.username,
          name: req.body.name,
          ipaddress: req.body.ipaddress
      };
      const response = await mongodb.getDatabase().db().collection('laptop').replaceOne({ _id: userId }, user);
        if (response.modifiedCount > 0) {
        res.status(204).send();
      } else {
        res.status(500).json(response.error || 'Some error occurred while updating the user.');
      }
    };

    const deleteLaptop = async (req, res) => {
        //#swagger.tags=['Users']
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).json('Must use a valid contact id to delete a contact.');
          }
        const userId = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db().collection('laptop').deleteOne({ _id: userId });
        if (response.deletedCount > 0) {
          res.status(204).send();
        } else {
          res.status(500).json(response.error || 'Some error occurred while deleting the user.');
        }
      };
module.exports = {
    getAll,
    getSingle,
    createLaptop,
    updateLaptop,
    deleteLaptop
};