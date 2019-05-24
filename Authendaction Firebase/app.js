// let database = firebase.database().ref("/")
// let username = document.getElementById("username")
// let email = document.getElementById("email")
// let password = document.getElementById("password")
// let btn = document.getElementById("btn")
// btn.addEventListener("click", () => {

//   const user = {
//     username: username.value,
//     email: email.value,
//     password: password.value


//   }
//   console.log(user)
//   firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//   .then((res)=>{
//   console.log(res.user.uid)
//   database.child(`users/${res.user.uid}`).push(user)
//     }).catch((error)=>{
//         const errorMsg = error.message
//         console.log(errorMsg)
//     })
//   })
//   firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
//     console.log(res.user.uid)
//     database.child(`users/${res.user.uid}`).nce("value",(snap)=>{
//       const obj = snap.val()
//       obj.id = snap.key
//       localStorage.setItem("newUser",JSON.stringify(obj))
//     })
//     console.log(res)
//   })
//     .catch(function (error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorMessage);

//     });
   let database = firebase.database().ref("/")
   firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
       console.log(user.uid)
       database.child(`users/${user.uid}`).once("value",(snap)=>{console.log(snap.val())})
      }
      
      
      
      else {
        console.log(user)
      }
    });