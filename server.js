const express = require('express');
const courselib=require('./backend/lib/courselib');
const dbconnect = require('./backend/db/dbconnect');
const config=require('./backend/config/config');
const app = express();
dbconnect.connect();
app.use(express.urlencoded({extended:true}));        
app.use(express.json());
const mongoose = require('mongoose');
app.use(express.static(__dirname+"/frontend"));
app.get("/crudoper",function(req,res){
    let filepathname9=__dirname+"/frontend/html/crud.html";
    res.sendFile(filepathname9);
})
app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.post("/crud",courselib.addnewone);
app.put("/crud/:idd", courselib.update);

app.listen(config.webPort, function(){
    console.log("Server start running on http://localhost:"+config.webPort);
})


app.get("/", function(req, res){
    res.send("Welcome to Dhanya's Site ");
});
app.get("/resume", function(req, res){
    
    let file= __dirname+"/frontend/html/resume.html";
    res.sendFile(file);

})
app.get("/google", function(req, res){
    
    let file= __dirname+"/frontend/html/google.html";
    res.sendFile(file);

})
app.get("/apple", function(req, res){
    
    let file= __dirname+"/frontend/html/apple.html";
    res.sendFile(file);

})
app.get("/register", function(req, res){
    
    let file= __dirname+"/frontend/html/register.html";
    res.sendFile(file);

})
app.get("/todo", function(req, res){
    
    let file= __dirname+"/frontend/html/todo.html";
    res.sendFile(file);

})
app.get("/colorpick", function(req, res){
    
    let file= __dirname+"/frontend/html/colorpick.html";
    res.sendFile(file);

})
app.get("/piechart", function(req, res){
    
    let file= __dirname+"/frontend/html/pie.html";
    res.sendFile(file);

})
// // Heroku will automatically set an environment variable called PORT
