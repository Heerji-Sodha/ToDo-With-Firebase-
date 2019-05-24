let database = firebase.database().ref("/")
setTimeout(
  function(){ 
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      //  console.log(user.uid)
      //  database.child(`users/${user.uid}`).once("value",(snap)=>{console.log(snap.val())})
       window.location.href="./html/Home.html"
      }
      
      
      
      else {
        console.log(user)
        window.location.href="./html/signUp.html"
      }
    });
   }, 3000);

