'use strict';

var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var DATAPATH = './contacts.json';

var Contact = require('../models/contact');

/* GET home page. */
router.get('/addContact', function(req, res, next) {
  res.render('addContact', { title: 'Add Contact' });
});

router.get('/', function(req, res, next) {
  fs.readFile(DATAPATH, function(err, data) {
    var contacts = JSON.parse(data); 
    res.render('index', { title: 'Contact List', contacts: contacts})
  })
});

router.get('/contacts/:contactindex', function(req, res, next) {
  var index = parseInt(req.params.contactindex); 
  fs.readFile(DATAPATH, function(err, data) {
    var contacts = JSON.parse(data);
    var contact = contacts[index];
    res.render('showpage', {contact: contact, index: index});
  });
});

module.exports = router;
