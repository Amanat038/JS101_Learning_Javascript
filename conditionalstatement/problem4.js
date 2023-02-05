//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
// stored.
let credentials_username = "amanat";
let credentials_password = "bhadouriya";

// login.
let username = "amanat";
let password = "bhadouriya";

if(credentials_username == username){
  if(credentials_password == password){
    console.log("I can login");
  }
  else{
    console.log("your password is not matching");
  }
}
else {
  console.log("your username is not matching");
}