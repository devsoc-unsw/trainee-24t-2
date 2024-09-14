var express = require('express');
var expressRouter = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./models/userModel');
const url = 'mongodb+srv://root:rootPassword@crudapp2.49zr8.mongodb.net/UsersDB?retryWrites=true&w=majority&appName=CRUDAPP2';
const app = express();

expressRouter.use(logger('dev'));
expressRouter.use(express.json());
expressRouter.use(express.urlencoded({ extended: false }));
expressRouter.use(cookieParser());
expressRouter.use(express.static(path.join(__dirname, 'public')));
expressRouter.use(bodyParser.json());
expressRouter.use(bodyParser.urlencoded({extended:true}));
expressRouter.use(cors());

// Sends a request to users route
expressRouter.get('/', (req, res) => {
  res.send("This is the users page! Hi! this is another test");
})

// Sending and Storing data
expressRouter.post('/', async (req, res) => {
  try {
      res.send(req.body);
      console.log(req.body);
      const user = await User.create(req.body);
      res.status(200).json(user);
  } catch(error) {
      console.log(error);
  }
})

expressRouter.get('/', async (req, res) => {
  try {
      const users = await User.find({});
      res.status(200).json(users);
  } catch (error) {
      res.status(500).json({message: error.message});
  }
})

// this is to get users by the id
expressRouter.get('/:id', async(res, req) => {
  try {
      const {id} = req.params;
      const user = await Product.findById(id);
      res.status(200).json(product);
  } catch(error) {
      res.status(500).json({message: error.message});
  }
})


module.exports = expressRouter;
