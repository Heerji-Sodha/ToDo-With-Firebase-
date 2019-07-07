
let more = ()=>{
    document.getElementById("row").style.display="block"
}


let userData = localStorage.getItem(`userData`);
userData = JSON.parse(userData);



let donate = () =>{
  let y = document.getElementById(`bloodgroup1`);
  let x = y.options[y.selectedIndex].value;
  console.log(x)
    
      if(userData.blood){
        alert(`Already`)
      }
      else{
        userData.blood = x;
        localStorage.setItem(`userData`,JSON.stringify(userData))
        database.child(`CurrentUser/${userData.id}/`).update({blood : x})



      }


}







//  slider show  js 
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}


document.getElementById("usr").innerHTML = userData.fullName
document.getElementById("imge1").src = userData.imageUpload.slice(12)


//  card total donar  
let database = firebase.database().ref("/")
let allDoner = document.getElementById("totaldoner")
database.child(`CurrentUser`).on("child_added",(blood)=>{

  let allblood = blood.val()
  if (allblood.blood !== "" && allblood.blood !== undefined){
  allDoner.innerHTML = Number(allDoner.innerHTML)+ 1;
    console.log(allblood.blood)
  let bloodname = document.getElementById(allblood.blood);
  console.log(bloodname)
  bloodname.innerHTML = Number(bloodname.innerHTML)+ 1;
  allblood.innerHTML = Number(allblood.innerHTML);

  }
})