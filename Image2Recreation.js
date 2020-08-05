function displayLogin(){
var loginDiv = document.getElementById("loginDiv");
  loginDiv.style.display = "block";
  var signupDiv = document.getElementById("signupDiv");
  signupDiv.style.display = "none";
}
function displaySignUp(){
var loginDiv = document.getElementById("loginDiv");
  loginDiv.style.display = "none";
  var signupDiv = document.getElementById("signupDiv");
  signupDiv.style.display = "block";
}
function check()
{
 if(document.getElementById("firstname").value != "" && document.getElementById("lastname").value != "" && document.getElementById("email").value != "" && document.getElementById("psw").value !="")
  {
    window.open('https://harman.com/')
  }
}