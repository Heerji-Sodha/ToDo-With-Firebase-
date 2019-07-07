update = () => {
    window.location.href = "editaccount.html"

}


let database = firebase.database().ref(`/`);

let userData = localStorage.getItem(`userData`);
userData = JSON.parse(userData);




database.child(`CurrentUser/${userData.id}/`).on(`value`, (snap) => {

    let data = snap.val();

    document.getElementById(`name`).innerHTML = data.fullName;
    document.getElementById(`age`).innerHTML = data.age;
    document.getElementById(`phone`).innerHTML = data.contact;
    document.getElementById(`address`).innerHTML = data.address;
    document.getElementById(`email`).innerHTML = data.email
    document.getElementById(`city`).innerHTML = data.city;;
    document.getElementById(`userimg`).src = data.imageUpload.slice(12)

    //  div request la 
})




database.child(`CurrentUser/${userData.id}/request/`).on(`child_added`, (checkRequest) => {

    let check = checkRequest.val();
    check.id = checkRequest.key
    console.log(check.id)

    if (check.owner === userData.fullName) {

        let div = document.getElementById(`div1`);

        let divv = document.createElement('div')
        divv.setAttribute("id", "divv")

        let h3 = document.createElement('h3')
        h3.setAttribute("id", "h3")
        let h3_text = document.createTextNode(`${check.reciver} Need Blood Please help ${check.reciver}`);
        let p = document.createElement('p')
        p.setAttribute("id", "h3")

        h3.appendChild(h3_text)
        divv.appendChild(h3)
        div.appendChild(divv)



        let yes = document.createElement('input')
        yes.setAttribute("type", "button")
        yes.setAttribute("id", check.id)
        yes.setAttribute("class", `btn33`)
        yes.setAttribute("value", "Accept")
        p.appendChild(yes)
        divv.appendChild(p)
        div.appendChild(divv)




        let no = document.createElement('input')
        no.setAttribute("type", "button")
        no.setAttribute("id", check.id)
        no.setAttribute("class", `btn22`)
        no.setAttribute("value", "Reject")
        p.appendChild(no)
        divv.appendChild(p)
        div.appendChild(divv)


        database.child(`CurrentUser/${userData.id}/request`).on(`child_added`, (checkRequest2) => {
            if (checkRequest2.val().owner === userData.fullName && checkRequest2.val().answer === `Yes`) {
                yes.parentNode.parentNode.style.display = `none`
            }
            else {
                yes.parentNode.parentNode.style.display = `block`
            }


        })




        yes.addEventListener(`click`, function () {
            database.child(`CurrentUser/${userData.id}/request/${this.id}/`).update({ answer: `Yes` })
            database.child(`CurrentUser/${check.reciverid}/response`).update({ answer: `Yes`,owner : check.owner })

            database.child(`CurrentUser/${userData.id}/request`).on(`child_added`, (checkRequest1) => {
                if (!checkRequest1.val().answer) {
                    console.log(checkRequest1.key)
                    database.child(`CurrentUser/${userData.id}/request/${checkRequest1.key}`).remove()
                }

                this.parentNode.parentNode.style.display = `none`

            })

        })

        no.addEventListener(`click`, function () {
            database.child(`CurrentUser/${userData.id}/request/${this.id}`).remove()
            this.parentNode.parentNode.style.display = `none`
        })

    }


})

database.child(`CurrentUser/${userData.id}/response/`).on(`value`, (checkRequest2) => {
    if(checkRequest2.val().answer === `Yes`){
        let div = document.getElementById(`div1`);

        let divv = document.createElement('div')
        divv.setAttribute("id", "divv")
    
        let h3 = document.createElement('h3')
        h3.setAttribute("id", "h3")
        let h3_text = document.createTextNode(`${checkRequest2.val().owner} Ready To Help  ${userData.fullName}`);
        let p = document.createElement('p')
        p.setAttribute("id", "h3")
    
        h3.appendChild(h3_text)
        divv.appendChild(h3)
        div.appendChild(divv)


    }



})
