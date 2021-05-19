
const mongoose=require('mongoose');
var password = process.env.Mongo_atlas_password;
var connectionString = "mongodb+srv://dhanyasrit:"+password+"@cluster0.v4dsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(connectionString, {});
mongoose.connection.on('connected', function(){
    console.log("Database connected");

});
const courselib=require('./backend/lib/courselib');
courselib.createcourse({coursename:'Mean Stack course'},function(err,course){
    console.log(course);
})