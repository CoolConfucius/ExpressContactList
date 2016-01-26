'use strict'; 

$(document).ready(init); 

function init() {
  // console.log("contactIndex");
  // console.log($(this).data(index));
  // var index = $(this).data('index');
  $('#remove').click(remove); 
  $('#edit').click(edit); 
}

function remove(){
  var index = $(this).data('index');
  console.log(index);
  $.ajax({
    url: "/contacts/"+index,
    method: "DELETE"
  })
  .success(function(data) {
    location.replace('/');
  })
  .fail(function(err) {
    alert('Error. Check console.');
    console.error("Error:", err);
  });;
}