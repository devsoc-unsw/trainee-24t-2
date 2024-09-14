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

expressRouter.get('/', function(req, res) {
  try {
      res.send(req.body);
      res.sendFile(__dirname + "/form.html");
  } catch(error) {
      console.log(error);
  }
})

expressRouter.post('/', function(req, res) {
  try {
      console.log(req.body);
      
      var name = req.body.username; 
      var pass = req.body.password; 
      var projects = "none";
    
      var data = { 
          username: name,
          password: pass, 
          projects: projects 
      } 
      console.log("Inserted New Project");
      const user = User.create(data);
      res.status(200).json(user);
  } catch(error) {
      console.log(error);
  }
})

module.exports = expressRouter;
