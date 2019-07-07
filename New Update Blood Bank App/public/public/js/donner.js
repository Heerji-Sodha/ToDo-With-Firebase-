
let database = firebase.database().ref(`/`);
let userData = localStorage.getItem(`userData`);
userData = JSON.parse(userData);


database.child(`CurrentUser/`).on(`child_added`, (users) => {
    let data = users.val()
    data.id = users.key

    console.log(data.id)

    if (data.blood) {
        let x = document.getElementById("mandiv")

        let div = document.createElement('div')
        div.setAttribute("id", "div0")
        let div1 = document.createElement('div')
        const img = document.createElement('img')
        img.setAttribute("id", "img")
        img.setAttribute("style", "width:160px;height:110px;border-radius:10px;")
        img.setAttribute("src", data.imageUpload.slice(12))
        div1.appendChild(img)
        div.appendChild(div1)





        const p = document.createElement('p')
        p.setAttribute("id", "name1")
        const litext = document.createTextNode(data.fullName)
        p.appendChild(litext)
        div1.appendChild(p)
        
        const p1 = document.createElement('p')
        p1.setAttribute("class", "name2")
        const p1text = document.createTextNode(data.blood)
        p1.appendChild(p1text)
        div1.appendChild(p1)

        
        const p2 = document.createElement('p')
        p2.setAttribute("class", "name3")
        const p2text = document.createTextNode(data.city)
        p2.appendChild(p2text)
        div1.appendChild(p2)

        div.appendChild(div1)








        let btn = document.createElement('input')
        btn.setAttribute("type", "button")
        btn.setAttribute("id", data.id)
        btn.setAttribute("class", `btn`)
        btn.setAttribute("value", "MoreInfo")
        div1.appendChild(btn)
        div.appendChild(div1)
        x.appendChild(div)


        let request = document.createElement('input')
        request.setAttribute("type", "button")
        request.setAttribute("id", data.id)
        request.setAttribute("class", `btn`)
        request.setAttribute("value", "Request")
        div1.appendChild(request)
        div.appendChild(div1)
        x.appendChild(div)
        
        database.child(`CurrentUser/${data.id}/request/`).on(`child_added`, (checkRequest) => {
            let check = checkRequest.val();
            check.id = checkRequest.key;
            if (check.reciver === userData.fullName) {
                request.value = `Requested`
                request.disabled = true
            }
            if (check.answer === `Yes` && check.ownerid === request.id) {
                request.value = `Accepted`
                request.disabled = true
            }
        })
        if (data.fullName === userData.fullName) {
            request.value = `Own Card`
            request.disabled = true
        }




        request.addEventListener(`click`, function () {
            var ref = firebase.database().ref("users/ada");
            ref.once("value")
                .then(function (snapshot) {
                    if (snapshot.exists() === true) {

                        database.child(`CurrentUser/${this.id}/request/`).on(`child_added`, (checkRequest) => {
                            let check = checkRequest.val();
                            check.id = checkRequest.key;
                            if (check.reciverid === userData.id) {
                                this.value = `Requested`
                                this.disabled = true
                            }
                           else {

                                let allrequest = {
                                    owner: data.fullName,
                                    reciver: userData.fullName,
                                    ownerid: request.id,
                                    reciverid: userData.id
                                }
                                database.child(`CurrentUser/${request.id}/request`).push(allrequest)
                            }

                        })



                    }
                    else {
                        let allrequest = {
                            owner : data.fullName,
                            reciver : userData.fullName,
                            ownerid : request.id,
                            reciverid : userData.id
                        }
                         database.child(`CurrentUser/${request.id}/request`).push(allrequest)
                    }
                });




        })






        btn.addEventListener(`click`, function () {
            console.log(this.id)

            localStorage.setItem(`userId`, JSON.stringify(this.id))
            window.location.href = "moredata.html"



        })

        document.getElementById(`bloodgroups`).addEventListener(`click`,function(){
            let allBlood = document.getElementsByClassName("name2")
            let x = document.getElementById(`bloodgroups`);
            let dropdown = x.options[x.selectedIndex].value;
            console.log(dropdown)
        for (let i = 0; i < allBlood.length; i++){
            console.log(allBlood[i].innerHTML)
        if(dropdown === allBlood[i].innerHTML || dropdown === ""){
            allBlood[i].parentNode.parentNode.style.display = "block"
        }

        else if(dropdown !== allBlood[i].innerHTML){
            allBlood[i].parentNode.parentNode.style.display = "none"
        }
    }
        })


    
        document.getElementById(`country`).addEventListener(`click`,function(){
            let allBlood = document.getElementsByClassName("name3")
            let x = document.getElementById(`country`);
            let dropdown = x.options[x.selectedIndex].value;
            console.log(dropdown)
        for (let i = 0; i < allBlood.length; i++){
            console.log(allBlood[i].innerHTML)
        if(dropdown === (allBlood[i].innerHTML).toUpperCase() || dropdown === ""){
            allBlood[i].parentNode.parentNode.style.display = "block"
        }

        else if(dropdown !== allBlood[i].innerHTML){
            allBlood[i].parentNode.parentNode.style.display = "none"
        }
    }
        })



    }
})

