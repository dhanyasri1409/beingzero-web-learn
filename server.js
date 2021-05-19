const express = require('express');
const courselib=require('./backend/lib/courselib');
const dbconnect = require('./backend/db/dbconnect');
const app = express();
dbconnect.connect();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const mongoose = require('mongoose');
app.use(express.static(__dirname+"/frontend"));
app.get('/crud',function(req,res)
{
    res.sendFile(__dirname+"/frontend/html/crud.html");
})
app.get('/api/courses',courselib.getallcourses);

app.post('/api/courses',courselib.createcourse);
//const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(3000, function(){
    console.log("runnig server http://localhost:3000");
})
//const mongoose = require('mongoose');
//app.use(express.static(__dirname+"/frontend"));
//var password = process.env.Mongo_atlas_password;
// connectionString = "mongodb+srv://dhanyasrit:"+password+"@cluster0.v4dsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//mongoose.connect(connectionString, {});
//mongoose.connection.on('connected', function(){
 //   console.log("Database connected");

//});

// app.get("/", function(req, res){
//     res.send("Welcome to Dhanya's Site ");
// });
// app.get("/resume", function(req, res){
    
//     let file= __dirname+"/frontend/html/resume.html";
//     res.sendFile(file);

// })
// app.get("/google", function(req, res){
    
//     let file= __dirname+"/frontend/html/google.html";
//     res.sendFile(file);

// })
// app.get("/apple", function(req, res){
    
//     let file= __dirname+"/frontend/html/apple.html";
//     res.sendFile(file);

// })
// app.get("/register", function(req, res){
    
//     let file= __dirname+"/frontend/html/register.html";
//     res.sendFile(file);

// })
// app.get("/todo", function(req, res){
    
//     let file= __dirname+"/frontend/html/todo.html";
//     res.sendFile(file);

// })
// app.get("/colorpick", function(req, res){
    
//     let file= __dirname+"/frontend/html/colorpick.html";
//     res.sendFile(file);

// })
// app.get("/piechart", function(req, res){
    
//     let file= __dirname+"/frontend/html/pie.html";
//     res.sendFile(file);

// })
// Heroku will automatically set an environment variable called PORT
