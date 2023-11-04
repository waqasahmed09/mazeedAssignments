// question No. 1

function checkDivide() {
    let input = parseFloat(document.querySelector("#input").value);
    let result = document.querySelector(".result");

    if (input % 3 === 0) {
        result.textContent = input + " is divisible by 3";
    } else {
        result.textContent = input + " is not divisible by 3";
    }
}


//question No.2 


function EvenOdd() {
    let input2 = parseFloat(document.querySelector("#input2").value);
    let result2 = document.querySelector(".result2");

    if (input2 % 2 === 0) {
        result2.textContent = input2 + " is even";
    } else {
        result2.textContent = input2 + " is odd";
    }
}


//question No.3 


function userAge() {
    let input3 = parseFloat(document.querySelector("#input3").value);
    let result3 = document.querySelector(".result3");

    if (input3 > 18) {
        result3.textContent =  " Old enough";
    } else {
        result3.textContent = " Too young ";
    }
}


//question No.4


function greetingUser() {
    let input4 = document.querySelector("#input4").value;
    // input4 = input4.toUpperCase();
    let result4 = document.querySelector(".result4");
    
    if (input4 === "Waqas") {
        result4.textContent =  " Welcome to my web technology ";
    } else {
        result4.textContent = " ";
    }



    //question No.5


function checkDivideTwo() {
    let input5 = document.querySelector("#input5").value;
    let result5 = document.querySelector(".result5");
    
    if (input4 === "Waqas") {
        result4.textContent =  " Welcome to my web technology ";
    } else {
        result4.textContent = " ";
    }

}


//question No.6


function userAge() {
    let input5 = document.querySelector("#input5").value;
    let result5 = document.querySelector(".result5");
    
    if (input4 === "Waqas") {
        result4.textContent =  " Welcome to my web technology ";
    } else {
        result4.textContent = " ";
    }

}
}

