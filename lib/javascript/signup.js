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
  $.ajax({
    url: "https://threedqueue-backend.herokuapp.com/api/v1/admins",
    type: "POST",
    crossDomain: true,
    data: adminParams,
    dataType: "json",
    success: function (response) {
        console.log("Admin created, Huzzah!")
        var resp = JSON.parse(response)
        alert(resp.status);
    },
    error: function (xhr, status) {
        console.log("Here at signup.js on the front end app, line 38")
        alert("error");
    }
});
  // $.post('https://threedqueue-backend.herokuapp.com/api/v1/admins', adminParams)
  // .then(function(result){
  //   // window.location.href = '/3dqueue/admin/dashboard.html';
  // })
  // .catch(handleError);
};

const handleError = function(error) {
  console.error(error);
};