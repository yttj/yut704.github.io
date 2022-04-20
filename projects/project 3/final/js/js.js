let AllArr = []
let Portraiture = []
let Collage = []
let Photography = []
let innerHtml = ``
let menu_listAll = document.querySelectorAll(".menu_list")
fetch("https://api.airtable.com/v0/appi9Jj4DWt5fTjXX/Projects?api_key=key9DzUgIPbM8v99S").then(res => {
    return res.json()
}).then(json => {
    let { records } = json
    console.log(records);
    AllArr = records[3].fields.images
    Portraiture = records[0].fields.images
    Collage = records[1].fields.images
    Photography = records[2].fields.images
    for(let i = 0; i < AllArr.length; i++){
        innerHtml = innerHtml + `<img src="${AllArr[i].thumbnails.large.url}">`
    }
    document.querySelector(".con").innerHTML = innerHtml
}).catch(err => {
    console.log(err);
})

function clickImg(e,type) {
    for(let i = 0; i < menu_listAll.length; i++){
        menu_listAll[i].classList.remove('active')
    }
    e.classList.add('active')
    innerHtml = ``
    switch (type){
        case 'AllArr':
            for(let i = 0; i < AllArr.length; i++){
                innerHtml = innerHtml + `<img src="${AllArr[i].thumbnails.large.url}">`
            }
            break;
        case 'Portraiture':
            for(let i = 0; i < Portraiture.length; i++){
                innerHtml = innerHtml + `<img src="${Portraiture[i].thumbnails.large.url}">`
            }
            break;
        case 'Collage':
            for(let i = 0; i < Collage.length; i++){
                innerHtml = innerHtml + `<img src="${Collage[i].thumbnails.large.url}">`
            }
            break;
        case 'Photography':
            for(let i = 0; i < Photography.length; i++){
                innerHtml = innerHtml + `<img src="${Photography[i].thumbnails.large.url}">`
            }
            break;
    }
    document.querySelector(".con").innerHTML = innerHtml

}
