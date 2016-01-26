'use strict';

var express = require('express');
var router = express.Router();
var fs = require("fs"); 
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile(path.join(__dirname, '../contacts.json'), function(err, data) {
    var contacts = JSON.parse(data); 
    console.log(contacts);
    res.render('index', {contacts: contacts, title: 'User Directory'} );
  });  
});

module.exports = router;
