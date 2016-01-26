'use strict'; 

$(document).ready(init); 

var $name, $email, $phone, $birthday, $group;

function init() {
  $name = $('#name'); 
  $email = $('#email'); 
  $phone = $('#phone'); 
  $birthday = $('#birthday'); 
  $group = $('#group'); 
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

function edit(){
  var index = $(this).data('index');
  var name = $name.val();
  var email = $email.val();
  var phone = $phone.val();
  var birthday = $birthday.val();
  var group = $group.val();
  $.ajax({
    url: "/contacts/"+index,
    method: "PUT",
    data: {
    name: name, email: email, phone: phone,
    birthday: birthday, group: group
  }
  })
  .success(function(data) {
    location.replace('/');
  })
  .fail(function(err) {
    alert('Error. Check console.');
    console.error("Error:", err);
  });;
}