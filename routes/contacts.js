'use strict';

var express = require('express');
var router = express.Router();
var fs = require('fs'); 
var DATAPATH = './contacts.json'; 

var Contact = require('../models/contact');

/* GET contacts listing. */
router.get('/', function(req, res, next) {
  Contact.find(function(contacts){
    res.send(contacts);
  })
});

router.post('/', function(req, res, next) {
  Contact.find(function(contacts){
    contacts.push(req.body);
    Contact.write(contacts, function(err){
      res.status(err ? 400 : 200).send(err || contacts);
    })
  })
});

router.delete('/:contactindex', function(req, res) {
  var index = parseInt(req.params.contactindex);

  Contact.find(function(contacts){
    contacts.splice(index, 1);

    Contact.write(contacts, function(err){
      res.send(contacts);
    });
  });
});



module.exports = router;
