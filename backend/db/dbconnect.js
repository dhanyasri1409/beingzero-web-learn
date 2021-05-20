var mongoose = require('mongoose');
const config = require('../config/config');
module.exports.connect = function(){
    var dbops = {useUnifiedTopology: true,useNewUrlParser: true}
    mongoose.connect(config.mongoConnectionString,dbops);
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