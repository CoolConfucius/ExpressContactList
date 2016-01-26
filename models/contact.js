'use strict';

var fs = require('fs');
var path = require('path');

const DATAFILE = path.join(__dirname, '../contacts.json'); 

var Contact = {}; 

Contact.write = function(contacts, cb) {
  fs.writeFile(DATAFILE, JSON.stringify(contacts), function(err){
    cb(err)
  });
};

Contact.find = function(cb) {
  fs.readFile(DATAFILE, function(err, data){
    var contacts = JSON.parse(data); 
    cb(contacts);
  });
};

module.exports = Contact; 