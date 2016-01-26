'use strict';

var express = require('express');
var router = express.Router();

var Contact = require('../models/contact');

/* GET home page. */
router.get('/addContact', function(req, res, next) {
  res.render('addContact', { title: 'Add Contact' });
});

router.get('/', function(req, res, next) {
  Contact.find(function(contacts){
    res.render('index', { title: 'Contact List', contacts: contacts})
  });
});

router.get('/contacts/:contactindex', function(req, res, next) {
  var index = parseInt(req.params.contactindex); 
  
  Contact.find(function(contacts){
    var contact = contacts[index];
    res.render('showpage', {contact: contact, index: index});    
  });
});

module.exports = router;
