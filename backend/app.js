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

// Sends a request to users route
app.get('/users', (req, res) => {
    res.send("This is the users page! Hi! this is another test");
})

// Sending and Storing data
app.post('/user', async (req, res) => {
    try {
        res.send(req.body);
        console.log(req.body);
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch(error) {
        console.log(error);
    }
})

app.get('/signup', function(req, res) {
    try {
        res.send(req.body);
        res.sendFile(__dirname + "/form.html");
    } catch(error) {
        console.log(error);
    }
})

app.post('/signup', function(req, res) {
    try {
        // let newUser = new User({
        //     username: await req.body.username,
        //     password: await req.body.password,
        //     projects: "none"
        // });

        console.log(req.body);
        
        var name = req.body.username; 
        var pass = req.body.password; 
        var projects = "none";
      
        var data = { 
            username: name,
            password: pass, 
            projects: projects 
        } 
        console.log("Inserted New User");
        const user = User.create(data);
        res.status(200).json(user);
        // await newUser.save();
        // res.redirect("\form.html");
    } catch(error) {
        console.log(error);
    }
})

app.get('/user', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// this is to get users by the id
app.get('/user/:id', async(res, req) => {
    try {
        const {id} = req.params;
        const user = await Product.findById(id);
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})

// app.listen(3000, ()=>{
//     console.log("Running on Port 3000!");
// })
// updating or editing data in database
// app.put('products:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const user = await User.findByIdAndUpdate(id);
//         // if 
//         // if ()
//     } catch(error) {
//         res.status(500).json({message: error.message});
//     }
// })

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
