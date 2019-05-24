let database = firebase.database().ref("/")
let email = document.getElementById("email")
let password = document.getElementById("password")
let name = document.getElementById("name")



// window.location.href="Home.html"



signUp = () => {
  const user = {
    email: email.value,
    password: password.value,
    name: name.value
  }
  firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((res) => {
      console.log(res.user.uid)
      database.child(`users/${res.user.uid}`).set(user)
      alert("Succesful Signup")
      window.location.href = "../html/login.html"
    }).catch((error) => {
      const errorMsg = error.message
      console.log(errorMsg)
      alert("Please Enter your Data")

    })

}

