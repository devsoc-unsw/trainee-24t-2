var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./models/userModel');
const url = 'mongodb+srv://root:rootPassword@crudapp2.49zr8.mongodb.net/UsersDB?retryWrites=true&w=majority&appName=CRUDAPP2';
const app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signupRouter = require('./routes/signup');
var projectRouter = require('./routes/project');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signupRouter);
app.use('/project', projectRouter);

const con = mongoose.connect(url)
.then(() => {
    app.listen(3000, ()=> {
        console.log("Node API is running");
    })
    console.log("Connected to MongoDB!");
}).catch((error)=> {
    console.log(error);
})

module.exports = app;
