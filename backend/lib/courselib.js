const coursemodel = require('../models/coursemodel');
module.exports.createcourse=function(req,res){
    var course=new coursemodel(req.body);
    course.save(function(err,courseobj){
        if(err)
        {
            console.log("err"+err);
        }
        else{
            callback(err,courseobj);
        } 
    })

}

module.exports.getallcourses=function(req, res){
    var query= {}
    coursemodel.find(query,function(err,courseobjarr){
        if(err)
        {
            res.json({error: err});
        }
        else{
            res.json(courseobjarr);
        }
    })
}