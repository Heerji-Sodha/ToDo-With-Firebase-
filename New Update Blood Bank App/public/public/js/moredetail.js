
let database = firebase.database().ref(`/`);

let userid = localStorage.getItem(`userId`);
userid = JSON.parse(userid);




database.child(`CurrentUser/${userid}/`).on(`value`,(snap)=>{

    let data = snap.val();

    document.getElementById(`name`).innerHTML = data.fullName;
    document.getElementById(`age`).innerHTML = data.age;
    document.getElementById(`phone`).innerHTML = data.contact;
    document.getElementById(`address`).innerHTML = data.address;
    document.getElementById(`email`).innerHTML = data.email;
    document.getElementById(`blood`).innerHTML = data.blood;
    document.getElementById(`city`).innerHTML = data.city;;
    document.getElementById(`userimg`).src = data.imageUpload.slice(12)







})