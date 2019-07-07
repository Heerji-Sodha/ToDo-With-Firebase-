// **************************** get data from user *******************************************************

let fullName = document.getElementById("fullName");
let contact = document.getElementById("contact");
let email = document.getElementById("email");
let password = document.getElementById("password");
let imageUpload = document.getElementById("imageUpload");
let signup = document.getElementById("signup");
let showError = document.getElementById("showError");


const dataBase = firebase.database().ref(`/`);
// **************************** data submit button *******************************************************

signup.addEventListener('click', ()=>{     
   

    
//      // ********************************************   Validation ***************************************************************
// let fullNameText = document.getElementById("fullNameText");
//      if(fullName.value.length === 0){
//         fullNameText.innerHTML = "*";
//         fullName.focus();
//         return false;
//     }
    
//     let numberText = document.getElementById("numberText");
//     if(contact.value.length !== 11){
//         numberText.innerHTML =  "*";
//         contact.focus();
//         return false;
//     }
 
   
//     let emailText = document.getElementById("emailText");
//     if(email.value.length === 0){
//         emailText.innerHTML = "*";
//         email.focus();
//         return false;
//     }
//     let passwordText = document.getElementById("passwordText");
//     if(password.value.length !== 6){
//         passwordText.innerHTML =  "*";
//         password.focus();
//         return false;
//     }
//     let fileText = document.getElementById("fileText");
//     if(imageUpload.value.length === 0){
//         fileText.innerHTML =  "*";
//         imageUpload.focus();
//         return false;
//     }
    let obj = {
        fullName : fullName.value,
       contact : contact.value,
        email : email.value,
        password : password.value,
        imageUpload : imageUpload.value
        

    }
console.log(obj)

    localStorage.setItem(`userData`,JSON.stringify(obj))
// **************************** user email save in firebase authentication *******************************************************

    firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password)
    .then((res)=>{
dataBase.child(`CurrentUser/${res.user.uid}`).set(obj);

window.location.href = '../index.html';

console.log(res);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // showError.innerHTML = "Please Enter Correct Email & Password"
     
      });

 })
 