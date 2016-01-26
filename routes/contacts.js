'use strict';

var express = require('express');
var router = express.Router();
var fs = require('fs'); 
var DATAPATH = './contacts.json'; 

/* GET contacts listing. */
router.get('/', function(req, res, next) {
  fs.readFile(DATAPATH, function(err, data) {
    var contacts = JSON.parse(data);
    res.send(contacts);
  });
});

router.post('/', function(req, res, next) {
  fs.readFile(DATAPATH, function(err, data) {
    var contacts = JSON.parse(data);
    contacts.push(req.body);
    fs.writeFile(DATAPATH, JSON.stringify(contacts), function(err) {
      res.status(err ? 400 : 200).send(err || contacts); 
      // res.redirect('/');
    });
  });
});


// router.get('/:contactindex', function(req, res, next) {
//   var index = parseInt(req.params.contactindex); 
//   fs.readFile(DATAPATH, function(err, data) {
//     var contacts = JSON.parse(data);
//     res.send(contacts);
//   });
// });

module.exports = router;
