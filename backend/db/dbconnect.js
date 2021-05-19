var mongoose = require('mongoose');

module.exports.connect = function(){
    var p=process.env.Mongo_atlas_password;
    //console.log("in dbconn");
    var s="mongodb+srv://dhanyasrit:"+p+"@cluster0.v4dsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    var dbops = {useUnifiedTopology: true,useNewUrlParser: true}
    mongoose.connect(s,dbops);
    var db = mongoose.connection;
    db.on('connected', function() {
    console.log("Successfully connected to MongoDB!");
    });

    db.on('error',function(err){
        console.log('connect error:'+err);
    })
    db.on('disconnected',function(){
        console.log('disconnected');
    })
}