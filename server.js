const express = require('express');
 
const app = express();
app.use(express.static(__dirname+"\frontend"));
 
app.get("/", function(req, res){
    res.send("Welcome to Dhanya's Site ");
});
app.get("/resume", function(req, res){
    
    let file= __dirname+"/frontend/html/resume.html";
    res.sendFile(file);

})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
