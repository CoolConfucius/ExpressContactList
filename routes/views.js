'use strict';

var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var DATAPATH = './contacts.json';

/* GET home page. */
router.get('/addContact', function(req, res, next) {
  res.render('addContact', { title: 'Add Contact' });
});

router.get('/', function(req, res, next) {
  fs.readFile(DATAPATH, function(err, data) {
    var contacts = JSON.parse(data); 
    res.render('index', { title: 'User Directory', contacts: contacts})
  })
});

// router.get('/', function(req, res, next) {
//   fs.readFile(path.join(__dirname, '../contacts.json'), function(err, data) {
//     var contacts = JSON.parse(data); 
//     console.log(contacts);
//     res.render('index', {contacts: contacts, title: 'User Directory'} );
//   });  
// });


router.get('/contacts/:contactindex', function(req, res, next) {
  var index = parseInt(req.params.contactindex); 
  fs.readFile(DATAPATH, function(err, data) {
    var contacts = JSON.parse(data);
    var contact = contacts[index];
    res.render('showpage', {contact: contact});
  });
});

module.exports = router;
