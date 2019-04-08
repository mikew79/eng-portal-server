var mongoose = require('mongoose');
var User = mongoose.model('Project');

module.exports.addProject = function(req, res) {
    //need to rewrite code to handle project this is copied from register
    if(!req.body.name || !req.body.email || !req.body.password) {
      sendJSONresponse(res, 400, {
        "message": "All fields required"
      });
      return;
    }
 
   var user = new User();
 
   user.name = req.body.name;
   user.email = req.body.email;
 
   user.setPassword(req.body.password);
 
   user.save(function(err) {
     var token;
     token = user.generateJwt();
     res.status(200);
     res.json({
       "token" : token
     });
   });
 
 };