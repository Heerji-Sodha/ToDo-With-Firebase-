


document.getElementById("back").addEventListener("click", () => {
  window.location.href = "myaccount.html"
})

let dataBase = firebase.database().ref(`/`)

var userData = localStorage.getItem("userData")
userData = JSON.parse(userData);
console.log(userData)

document.getElementById("fullName").value = userData.fullName;
document.getElementById("age").value = userData.age;
document.getElementById("contact").value = userData.fullName;
document.getElementById("city").value = userData.city;
document.getElementById("address").value = userData.address;
document.getElementById("contact").value = userData.contact;


document.getElementById(`update`).addEventListener(`click`, () => {


  let fullName = document.getElementById("fullName").value;
  let age = document.getElementById("age").value;
  let contact = document.getElementById("contact").value;
  let city = document.getElementById("city").value;
  let address = document.getElementById("address").value;
  let imageUpload = document.getElementById("imageUpload").value;

  let blood = document.getElementById(`blood`);

  let option = blood.options[blood.selectedIndex].value;
  console.log(option)


  let obj = {
    fullName: fullName,
    age: age,
    contact: contact,
    city: city,
    address: address,
    imageUpload: imageUpload,
    id: userData.id,
    blood: option,
    email: userData.email,
    password : userData.password
  }

  console.log(obj)
  dataBase.child(`CurrentUser/${userData.id}`).set(obj)
  localStorage.setItem(`userData`, JSON.stringify(obj))
  window.location.href = `myaccount.html`
})
