'use strict'; 

$(document).ready(init); 

function init() {
  console.log("contactIndex");
  $('#contactList').on('click', 'tr', goTo)
}

function goTo(){
  var index = $(this).index(); 
  console.log("INdex:", index);
  $.get('/contacts/'+index, function(req, res, next){
    location.replace('/contacts/'+index); 
  });
}
