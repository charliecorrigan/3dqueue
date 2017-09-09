$ = require('jquery');

$(document).ready(function(){
  listenForSubmit()
});


const listenForSubmit = function(){
  $('form.signup').on('submit', function(){
    console.log("Got to the listen function")
    event.preventDefault();
    var organization = $('input[name="organization"]').val();
    var email = $('input[name="email"]').val();
    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();
    console.log("Here are the values we grabbed: ")
    console.log(organization)
    console.log(email)
    console.log(username)
    console.log(password)
    postNewAdmin({username: username, password: password});
  });
}

const postNewAdmin = function(adminParams){
  console.log("Made it to the post new admin function")
  console.log("The code has been updated")
  console.log("Here are the adminParams: ")
  console.log(adminParams)
  $.post('https://threedqueue-backend.herokuapp.com/api/v1/admins', adminParams)
  .then(function(result){
    console.log("Admin created, Huzzah!")
  })
  .catch(handleError);
};

const handleError = function(error) {
  console.log("We are now in the handle error function")
  console.error(error);
};