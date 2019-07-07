// **************************** get data from which is login now *******************************************************

let email = document.getElementById("email");
let password =  document.getElementById("password");
let login = document.getElementById("login");
let showError = document.getElementById("showError");
const database =  firebase.database().ref('/');

// **************************** login function *******************************************************

login.addEventListener('click',()=>{
    let obj = {
        email : email.value,
        password : password.value
    }
// **************************** chek this user is sign up or not *******************************************************

    firebase.auth().signInWithEmailAndPassword(obj.email, obj.password)
    .then((res)=>{
    database.child(`CurrentUser/${res.user.uid}`).on("value" , current =>{
    current = current.val();
    current.id = res.user.uid
    localStorage.setItem("userData" , JSON.stringify(current));
  window.location.href ='./html/chat.html';
    console.log(res);
  })
    
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        // showError.innerHTML = "Please Enter Correct Email & Password";
      
      });
    
    })