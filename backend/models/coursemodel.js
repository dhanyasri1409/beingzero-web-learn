const mongoose=require('mongoose');
var courseSchema = new mongoose.Schema({
    coursename:String,
    articles:Number,
    isDeleted:Boolean
});

var courseModel = mongoose.model('courseTable',courseSchema);
module.exports = courseModel;