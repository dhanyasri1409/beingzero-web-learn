const coursemodel = require('../models/coursemodel');
module.exports.createcourse=function(req,res){
    var a=new coursemodel({
        coursename:req.body.course,
        articles:req.body.arts
    });
    a.save();                       
    res.redirect("/crud");
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