
function pushnot(){

let title = document.getElementById("title").value
let body = document.getElementById("body").value
 const obj={

title:title,
body:body,


 }




 console.log(obj)
}




let serviceWorkerRegister = async () => {
    const serviceWorker = await navigator.serviceWorker.register('serviseworker.js')
    return serviceWorker
}


let pushNoti = async () => {
    const serviceWorker = await serviceWorkerRegister();
    const permission = await window.Notification.requestPermission();
    const title = "Saylani"
    const options = {
        body: "Mass Training"
    }
    serviceWorker.showNotification(title, options)
}
pushNoti()

// window.addEventListener('load', async e => {
//     if ('serviceWorker' in navigator) {
//         navigator.serviceWorker.register('service-worker.js')
//             .then(async (register) => {
//                 const permission = await window.Notification.requestPermission();
//                 const title = "simple title"
//                 const options = {
//                     body:"hello world"
//                 }
//                 register.showNotification(title,options)
//                 console.log('service worker register')
//             })
//     }
// })

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        for (var i = 0; i < json.length; i++) {
            var data = document.getElementById('data');
            data.innerHTML += json[i].title
        }
    })

  