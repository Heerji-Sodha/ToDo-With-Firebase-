document.getElementById(`news`).addEventListener(`click`, function() {
    dropdown = document.getElementById(`news`).value;
    if (dropdown === `Select Any Channel`) {
      console.log(`select`);
    } else {
      let newsApi = `https://newsapi.org/v1/articles?source=${dropdown}&apikey=4f65abd6bc1e414a8e1a879360c7bece`;
      var array = [];
      fetch(newsApi)
        .then(response => response.json())
        .then(check => {
          let articles = check.articles;
          for (key in articles) {
            array.push(articles[key]);
            localStorage.setItem(`posts`, JSON.stringify(array));
            window.location.reload();
          }
        });
    }
  });
  
  var articles = localStorage.getItem(`posts`);
  articles = JSON.parse(articles);
  for (var key1 in articles) {
    let box1 = document.getElementById("one");
  
    let mianDiv = document.createElement("div");
    mianDiv.setAttribute(`class`, `inner`);
  
    let article = document.createElement("article");
    article.setAttribute(`class`, `feature left`);
  
    let span = document.createElement("span");
    span.setAttribute("class", "image");
  
    let image = document.createElement("img");
    image.setAttribute(`src`, articles[key1].urlToImage);
    span.appendChild(image);
  
    let div = document.createElement("div");
    div.setAttribute("class", "content");
  
    let heading = document.createElement("h2");
    heading.innerHTML = `Title : ${articles[key1].title}`;
  
    let heading1 = document.createElement("h6");
    heading1.innerHTML = `Author : ${articles[key1].author}`;
  
    let para = document.createElement("p");
    para.innerHTML = `Description : ${articles[key1].description}`;
  
    let date = document.createElement("span");
    date.innerHTML = `Author : ${articles[key1].publishedAt}`;
  
    div.appendChild(heading);
    div.appendChild(heading1);
    div.appendChild(para);
    div.appendChild(date);
    article.appendChild(span);
    article.appendChild(div);
  
    mianDiv.appendChild(article);
    // box.appendChild(mianDiv)
    box1.appendChild(mianDiv);
  }