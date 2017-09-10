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
  $.post('https://threedqueue-backend.herokuapp.com/api/v1/admins', adminParams)
  .then(function(result){
    console.log("Admin created, Huzzah!")
    // window.location.href = '/3dqueue/admin/dashboard.html';
  })
  .catch(handleError);
};

const handleError = function(error) {
  console.error(error);
};