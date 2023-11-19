//           Question No.1


function userFullName() {
    let inputValue1 = document.querySelector("#inputValue1").value;
    let inputValue2 = document.querySelector("#inputValue2").value;

    inputValue1 = inputValue1.toUpperCase();
    inputValue2 = inputValue2.toUpperCase();
    let FullName = `${inputValue1} ${inputValue2} welcome to my web`

    let result = document.querySelector(".result");
    result.innerHTML = FullName

}


//      Question No.2


function userFavMobile() {
    let inputValue3 = document.querySelector("#inputValue3").value;
   let lengthOfStringIs = inputValue3.length;

    inputValue3 = inputValue3.toUpperCase();
  
    let FullName = ` My Favourite mobile is: ${inputValue3} 
    length of String is ${lengthOfStringIs} `

    let result2 = document.querySelector(".result2");
    result2.innerHTML = FullName

}
