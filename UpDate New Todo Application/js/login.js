
let database = firebase.database().ref("/")




function login() {

  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  const obj = {
    email,
    password,

  }
  console.log(obj)
  firebase.auth().signInWithEmailAndPassword(obj.email, obj.password).then((res) => {
    console.log(res.user.uid)
    obj.id = res.user.uid;
    localStorage.setItem("dataSav", JSON.stringify(obj))
    window.location.href = "../html/Home.html"

  })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      alert("Please first Signup after log in")
      
    })
}

function signUp(){
  window.location.href="../html/signUp.html"


}