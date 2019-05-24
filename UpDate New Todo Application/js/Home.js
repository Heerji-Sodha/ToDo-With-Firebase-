let name = document.getElementById('name')
let adbtn = document.getElementById('button')
let ul = document.getElementById('ul')


let database = firebase.database().ref('/')

var dataSav = localStorage.getItem('dataSav');
dataSav = JSON.parse(dataSav)


adbtn.addEventListener("click", () => {
  const obj = {
    name: name.value
  }


 
  database.child('users/' + dataSav.id + "/todo").push(obj)
})

database.child('users/' + dataSav.id + "/todo").on("child_added", (snap) => {
  const data = snap.val()
  data.id = snap.key


  const li = document.createElement('li')
  li.setAttribute("id","dat")
  const litext = document.createTextNode(data.name)
  li.appendChild(litext)
  const delbtn = document.createElement('button')
  delbtn.setAttribute("id","delet")
  const delText = document.createTextNode('delete')
  const update = document.createElement('button')
  update.setAttribute("id","edit")
  const updateText = document.createTextNode('Update')
  li.appendChild(delbtn)
  delbtn.appendChild(delText)
  li.appendChild(update)
  update.appendChild(updateText)
  ul.appendChild(li)

  delbtn.addEventListener("click", () => {
    database.child('users/' + dataSav.id + "/todo/"+ data.id ).remove()
    li.remove()
  })


  update.addEventListener("click", () => {
    var newva = prompt("Enter value")
    database.child('users/' + dataSav.id + "/todo/" + data.id).update({name:newva})
    li.innerHTML = newva;
    li.appendChild(delbtn)
    li.appendChild(update)


  })


})


function logout() {
    firebase.auth().signOut().then(() => {
      window.location.assign("../html/login.html");
      localStorage.removeItem("dataSav")
    })
  }
