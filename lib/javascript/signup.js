$ = require('jquery');

$(document).ready(function(){
  listenForSubmit()
});


const listenForSubmit = function(){
  $('form .signup').on('submit', function(){
    event.preventDefault();
    var organization = $('input[name="organization"]').val();
    var email = $('input[name="email"]').val();
    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();
    this.postNewAdmin({username: username, password: password});
  }.bind(this));
}

const postNewAdmin = function(adminParams){
  $.post('localhost:3000/api/v1/admins', adminParams)
  .then(function(result){
    console.log("Admin created")
  }.bind(this))
  .catch(this.handleError);
};

const handleError = function(error) {
  console.error(error);
};