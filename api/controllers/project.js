var mongoose = require('mongoose');
var Project = mongoose.model('Project');
var User = mongoose.model('User');

// Function to add a new project to the database
module.exports.addProject = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: api endpoint not authorised"
    });
  } else {

    if(!req.body || !req.body.customer || !req.body.project || !req.body.accounttam || !req.body.projecttam) {
      sendJSONresponse(res, 400, {
        "message": "customer, project , projectTAM and accountTAM fields required"
      });
      return;
    }

    let project = new Project();
    //initialse project data
    project.customer = req.body.customer;
    project.project = req.body.project;
    project.projecttam = req.body.projecttam;
    project.accounttam = req.body.accounttam;
    project.ctd = (req.body.ctd ? req.body.ctd : 0);
    project.notes = (req.body.notes ? req.body.notes : '');
  
    //Set the default project owner as the creator
    project.team =  {
      role : 'owner',
      name : req.payload.name,
      uid : req.payload._id
    };

    project.save(function(err,result) {
      if(err)  {
        res.status(500).json({
              "message" : err.message,
              "error" : err
        });
      } else {
        res.status(200);
        res.json(result);
      }
    });
  }
 };

 //Function to return a full list of projects from the database
 module.exports.getProjects = function(req,res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: api endpoint not authorised"
    });
  } else {
    Project.find()
    .exec(function(err, projects) {
      res.status(200).json(projects);
    });
  }
 };
