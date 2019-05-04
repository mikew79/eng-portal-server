var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlProject = require('../controllers/project');

// profile
router.get('/profile', auth, ctrlProfile.profileRead); // not used at the monent, part of the authentication API

// authentication api
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/test', ctrlAuth.test);

//projects api
router.post('/project',auth, ctrlProject.addProject);
router.get('/project', auth, ctrlProject.getProjects);

module.exports = router;
