function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


window.addEventListener('load', async e => {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('.js')
          .then(() => {
              console.log('service worker register')
          })
  }
})





// let api = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-03&sortBy=publishedAt&apiKey=cec444ac635a4c2788034f460d7b9cc0"
//  var div = document.getElementById("news")
//  fetch(api)
//  .then((sucees) => {
//      return sucees.json();
//  }).then((data) => {
//     //  console.log(data);
// var articles = data.articles;
// console.log(articles);
// for(let key in articles){
//     div.innerHTML +=
//     "<div>"+"<img src="+articles[key].urlToImage + "/>"
//     +"<h1 >"+ articles[key].author+ "</h1>"
//      + "<h2>"+ articles[key].title+ "</h2>"
//    + "<p>"+articles[key].content +"</p>"
//    + "<p>"+articles[key].publishedAt + "</p>"
//    + "<p>"+articles[key].source + "</p>"
//    + "<p>"+articles[key].url + "</p>"
//    + "<p>"+articles[key].urlToImage + "</p>"


// + "<p>"+articles[key].description + "</p>" +"</div>"

  
//     }
//  })
