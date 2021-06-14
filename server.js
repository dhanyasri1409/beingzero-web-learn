const express = require('express');
const mongoose = require('mongoose');
const path=require('path');
const courselib=require('./backend/lib/courselib');
//const dbconnect = require('./backend/db/dbconnect');
const config=require('./backend/config/config');
const dbConectLib=require('./backend/lib/dbConnectLib');
var password = process.env.Mongo_atlas_password;
 console.log(password)
var connectionString = config.mongoConnectionString//"mongodb+srv://dhanyasrit:ammadaddy1409@cluster0.v4dsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"



// const app = express();
// app.use(express.static(__dirname+"/frontend"));
// app.use(express.urlencoded({extended: true}));
//  pp.use(express.json());
// //dbconnect.connect();
// dbConectLib.connect();
const app = express();
app.use(express.static(__dirname+"/frontend"));
 
   app.use(express.urlencoded({extended: true}));
 app.use(express.json());
 dbConectLib.connect();

//app.use(express.urlencoded({extended:true}));        
//app.use(express.json());
//const mongoose = require('mongoose');
//app.use(express.static(__dirname+"/frontend"));
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
app.get("/login1", function(req, res)
{
    let log=__dirname+"/frontend/html/login1.html";
    res.sendFile(log);

});
app.get("/login", function(req, res){
    
    let login=__dirname+"/frontend/html/login.html";
   res.sendFile(login);

});
app.get("/register", function(req, res){
    
    let register=__dirname+"/frontend/html/register.html";
   res.sendFile(register);

});

app.get("/", function(req, res){
    res.send("Welcome to Dhanya's Site ");
});
app.get("/resume", function(req, res){
    
    let file= __dirname+"/frontend/html/resume.html";
    res.sendFile(file);

})
app.get("/tambola", function(req, res){
    res.sendFile(__dirname+"/frontend/html/tambola.html");
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
var userSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
    isDeleted : {type:Boolean,default:false}
    
    
    });
    
    
var users = mongoose.model('users' , userSchema);

app.post('/api/register', function(req,res){
    users.find({email : req.body.email }, function (err, data) {
        if(err){ res.status(400).json({msg:"Failed"}); }
        else {//console.log(data);
              if(data.length>0)
              res.status(200).json({msg:"Saved Successful", result : data});
              else
              { 
                
                var add= new users(req.body);
                add.save(function(err,record) {
                if(err){
                    res.redirect("/register");
                }
                else {
                    res.redirect("/login");
                   }
                });
              }
             }
    });
})



app.post('/api/login', function(req,res){
    //console.log(req)
    //res.send(req)
    users.find(req.body , function (err, data) {
        if(err){ res.status(400).json({msg:"Failed"}); }
        else if(data.length==1)
        {
            res.redirect("/dashboard");
              
             }
             else{
                 res.redirect("/login");
             }
    });
})
// // Heroku will automatically set an environment variable called PORT
