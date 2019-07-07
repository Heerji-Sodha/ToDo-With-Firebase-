// user data
var Currentuser = localStorage.getItem("Currentuser")
Currentuser = JSON.parse(Currentuser);
console.log(Currentuser)


const dataBase = firebase.database().ref(`/`);

// ************************** log out ********************************************
document.getElementById("logout").addEventListener("click",()=>{
    


    // Sweet alert
    swal({
      title: "Are you sure?",
      text: "You LogOut from the Home page !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Successfully LogOut From the Home Page", {
            icon: "success",
          });
          firebase.auth().signOut().then(() => {
            window.location.assign("./../login/login.html");
            localStorage.removeItem("Currentuser")
          })
        } else {
          swal("You not LogOut form the Home Page !");
        }
      });
  



    })

dataBase.child(`AllUsers/${Currentuser.id}`).on(`value`, (extra) => {
    var data = extra.val();
    console.log(data)




    let forimg =  document.getElementById("forimg");
    let proImg = document.createElement("img");
    proImg.setAttribute("id" , "proImg");
    proImg.setAttribute("src",data.imageUpload.slice(12));
    forimg.appendChild(proImg)




    let forEmail =  document.getElementById("forEmail");
    let proEmail = document.createElement("img");
    // proEmail.setAttribute("id" , "proImg");
    proEmail.setAttribute("src","https://img.icons8.com/color/48/000000/gmail.png");
    forEmail.appendChild(proEmail)
    let emailShow = document.createElement("h4");
    emailShow.innerHTML =  data.email;
    forEmail.appendChild(emailShow)

// =================================== send btn =======================================
let sendBtn =  document.getElementById("sendBtn");

dataBase.child("message").on('child_added' , value=>{
let messageValue = value.val();
console.log(messageValue)
let  chatShow = document.getElementById("ChatShow");
chatShow.setAttribute("style","color:white")
// if (data.id!==Currentuser.id){
// // var p1 =  document.createElement("p");
// p1.setAttribute("style","background-color:red");
// chatShow.appendChild(p1);
// var container  = document.createElement("div");
// container.setAttribute("class","container");
// p1.appendChild(container);
// let span1 = document.createElement("span");
// span1.setAttribute("style","color:blue");
// container.appendChild(span1);
// let userName = document.createElement("span");
// userName.innerHTML = messageValue.currentUserName;
// container.appendChild(userName);
// var allUserimg =  document.createElement("img");
// allUserimg.setAttribute("src",messageValue.currentUserProImg.slice(12));
// allUserimg.setAttribute("class","imageProfile");
// container.appendChild(allUserimg);
// var allUserMsg =   document.createElement("p");
// allUserMsg.setAttribute("style","color:white");
// allUserMsg.innerHTML  = messageValue.messageWrite;
// container.appendChild(allUserMsg);
// var allUserTime =  document.createElement("span");
// allUserTime.setAttribute("style","color:white")
// allUserTime.setAttribute("class","time-right");
// allUserTime.innerHTML = messageValue.currentTime;
// container.appendChild(allUserTime);
// var br =   document.createElement("br");
// chatShow.appendChild(br)
// }
// self

console.log(Currentuser.id)
console.log(messageValue.userId)
// if (messageValue.usrId===Currentuser.id){
console.log(Currentuser.id)
console.log(messageValue.userId)
    // alert('hi');
    // console.log("hi")
let p2 = document.createElement("p");
// p2.setAttribute("style","background-color:green");

chatShow.appendChild(p2);
let container2  = document.createElement("div");

p2.appendChild(container2)
let allUserimg2 = document.createElement("img");
allUserimg2.setAttribute("src",messageValue.currentUserProImg.slice(12));
container2.appendChild(allUserimg2);
let userName2 = document.createElement("span");
userName2.setAttribute("style","color:black;font-weight:bold")
userName2.innerHTML = messageValue.currentUserName;
container2.appendChild(userName2);
let span2 = document.createElement("span");
span2.setAttribute("style","color:blue");
container2.appendChild(span2);
let allUserMsg2 =   document.createElement("p");
allUserMsg2.setAttribute("style","color:white");
allUserMsg2.innerHTML  = messageValue.messageWrite;
container2.appendChild(allUserMsg2);
// let hr = document.createElement("hr");
// container2.appendChild(hr);
let allUserTime2 =  document.createElement("span");
allUserTime2.setAttribute("style","color:white;")
allUserTime2.innerHTML = messageValue.currentTime;
container2.appendChild(allUserTime2);
container2.setAttribute("class","container darker");
if(Currentuser.id === messageValue.userId){
    container2.style.backgroundColor = `rgb(111, 161, 111)`;
allUserTime2.setAttribute("class","time-left");
allUserimg2.setAttribute("class","right imageProfile");


}
else{
    container2.style.backgroundColor = `rgb(179, 105, 105)`;
allUserTime2.setAttribute("class","time-right");
allUserimg2.setAttribute("class","imageProfile");


}
let br2 =   document.createElement("br");
chatShow.appendChild(br2)
// }
})


sendBtn.addEventListener(`click` ,() =>{
    var time = new Date();
    let currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  console.log(currentTime)
  let messageWrite =  document.getElementById("messageWrite");
let messageData = {
    messageWrite :messageWrite.value,
    currentTime : currentTime,
    currentUserName : Currentuser.fullName,
    currentUserProImg : Currentuser.imageUpload,
    userId : Currentuser.id
}
console.log(messageData)
dataBase.child("message").push(messageData);
})


})  


