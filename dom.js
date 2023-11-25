
//      question Node.1


function changeStyle() {
    let ul = document.querySelector("#ul");
    ul.style.fontFamily = "Arial, sans-serif";
    ul.style.color = "blue";
    ul.style.fontWeight = "700"


}

function changeInformation() {
    let ul = document.querySelector("#ul");

    let li1 = document.querySelector("#li1");
    let li2 = document.querySelector("#li2");
    let li3 = document.querySelector("#li3");

    li1.innerHTML = `<li > Nick Name: Wicky</li>`
    li2.innerHTML = `<li  >Favourites: Web Developer</li>`
    li3.innerHTML = `<li > HomeTown: Karachi Shareef </li>`
}


function showImage() {
    let image = document.createElement("img");

    let imagePath = './waqas.jpg';
    image.setAttribute("src", imagePath);

    document.body.appendChild(image);
}




//      question Node.2


let imageOfGoogle = document.querySelector("#imageOfGoogle");

    let changeImage = './assets/Yahoo-Logo.png';
    imageOfGoogle.setAttribute("src", changeImage);


    //  Question No.3

    
    document.addEventListener('DOMContentLoaded', (event) => {
        let boldTextElements = document.querySelectorAll(".boldText");

        boldTextElements.forEach((element) => {
            element.addEventListener('click', () => {
                element.style.color = "red";
            });
        });
    });

    // Question No.4

    let dropdown1 = document.querySelector("#dropdown1");
    let dropdown2 = document.querySelector("#dropdown2");
    let dropdown3 = document.querySelector("#dropdown3");
    let dropdown4 = document.querySelector("#dropdown4");
let allDropdwon = `all`

    let dropdown = document.querySelector("#dropdown");
    let dropDownBtn = document.querySelector("#dropDownBtn");
    dropDownBtn.addEventListener('click', () =>{
        console.log(dropdown1);
    })