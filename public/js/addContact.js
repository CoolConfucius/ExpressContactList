'use strict'; 

$(document).ready(init); 

var $name, $email, $phone, $birthday, $group, $add;

function init() {
  $name = $('#name'); 
  $email = $('#email'); 
  $phone = $('#phone'); 
  $birthday = $('#birthday'); 
  $group = $('#group'); 
  $add = $('#add'); 

  $add.click(addContact); 
}

function addContact() {
  var name = $name.val();
  var email = $email.val();
  var phone = $phone.val();
  var birthday = $birthday.val();
  var group = $group.val();
  $.post('/contacts', {
    name: name, email: email, phone: phone,
    birthday: birthday, group: group
  })
  .success(function(data) {
    location.replace('/');
  })
  .fail(function(err) {
    alert('Error. Check console.');
    console.error("Error:", err);
  });
}