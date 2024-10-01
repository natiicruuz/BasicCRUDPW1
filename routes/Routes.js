const express = require('express')
const router = express.Router();
const User = require('../models/UserModel');

//create
router.post('/users', async (req, res) => {
    const { name, email, age } = req.body;
  
    try {
      const user = new User({ name, email, age });
      await user.save();
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
  
  //read
  router.get('/users', async (req, res) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
  
  //update
  router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(id, { name, email, age }, { new: true });
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  })
  
  //delete
  router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await User.findByIdAndDelete(id);
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

module.exports = router
