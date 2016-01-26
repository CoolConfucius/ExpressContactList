'use strict'; 

$(document).ready(init); 

function init() {
  $('#contactList').on('click', 'tr', goTo)
}

function goTo(){
  var index = $(this).index(); 
  $.get('/contacts/'+index, function(req, res, next){
    location.replace('/contacts/'+index); 
  });
}