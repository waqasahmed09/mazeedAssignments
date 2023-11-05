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
        result3.textContent = " Old enough";
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
        result4.textContent = " Welcome to my web technology ";
    } else {
        result4.textContent = " ";
    }

}

//question No.5


function checkDivideTwo() {
    let input5 = document.querySelector("#input5").value;
    let result5 = document.querySelector(".result5");

    if (input5 === "Waqas") {
        result5.textContent = " Welcome to my web technology ";
    } else {
        result5.textContent = " ";
    }

}

//     //question No.6




//     //question No.7

function checkOperator() {
    let input7 = parseFloat(document.querySelector("#input7").value);
    let inputA7 = parseFloat(document.querySelector("#inputA7").value);
    let inputOperator7 = document.querySelector("#inputOperator7").value;
    let result7 = document.querySelector(".result7");

    if (isNaN(input7) || isNaN(inputA7)) {
        result7.textContent = "Please input valid numbers";
    } else {
        switch (inputOperator7) {
            case '+':
                result7.textContent = `${input7} and ${inputA7} are being added, the result is ${input7 + inputA7}`;
                break;
            case '-':
                result7.textContent = `${input7} and ${inputA7} are being subtracted, the result is ${input7 - inputA7}`;
                break;
            case '*':
                result7.textContent = `${input7} and ${inputA7} are being multiplied, the result is ${input7 * inputA7}`;
                break;
            case '/':
                if (inputA7 !== 0) {
                    result7.textContent = `${input7} and ${inputA7} are being divided, the result is ${input7 / inputA7}`;
                } else {
                    result7.textContent = "Cannot divide by zero";
                }
                break;
            case '%':
                if (inputA7 !== 0) {
                    result7.textContent = `${input7} and ${inputA7} are being operated by modulo, the result is ${input7 % inputA7}`;
                } else {
                    result7.textContent = "Cannot perform modulo by zero";
                }
                break;
            default:
                result7.textContent = "Invalid operator";
        }
    }
}


// QUESTION NO. 8

function timeSwitch() {
    let input8 = document.querySelector("#input8").value;
    let result8 = document.querySelector(".result8");
    let time = 1900;
    let fourZero = 0;

    if (time >= fourZero || time < 1200) {
        result8.textContent = " Good Morning, Nashta Krlo Friends ";
    } else if (time >= 1200 || time < 1700) {
        result8.textContent = " Good AfterNoon, Khana Kha lo Friends ";
    } else if (time >= 1700 || time < 2100) {
        result8.textContent = " Good Evening Chai Pee Lo friends ";
    } else if (time >= 2100 || time < 2359) {
        result8.textContent = " Good AfterNoon ";
    }

}

// QUESTION NO. 9 not completed 





// QUESTION NO. 10 

function passwordMatch() {
    let input10 = document.querySelector("#input10").value;
    let inputA10 = document.querySelector("#inputA10").value;
    let result10 = document.querySelector(".result10");

    if (input10 === inputA10) {
        result10.textContent = " Correct! The password you entered matches the original password ";
    } else {
        alert("please enter your name");
    }

}

// QUESTION NO. 11

function timeGreetings() {
    let input12 = parseFloat(document.querySelector("#input12").value);
    let result12 = document.querySelector(".result12");

    if (input12 < 18) {
        result12.innerHTML = `<h4> Goood Dayy</h4>`;
    } else if (input12 >= 18) {
        result12.innerHTML = ` <h3> GOod Evening </h3>`;
    } else {
        alert("please enter time in 24 hour format")
    }

}

// QUESTION NO. 13

function checkIntegers() {
    let input13 = parseFloat(document.querySelector("#input13").value);
    let inputA13 = parseFloat(document.querySelector("#inputA13").value);
    let result13 = document.querySelector(".result13");

    if (input13 > inputA13) {
        result13.innerHTML = `<h3>${input13} is greater than ${inputA13}</h3>`;
    } else if (inputA13 > input13) { // Corrected comparison here
        result13.innerHTML = `<h3>${input13} is smaller than ${inputA13}</h3>`;
    } else if (input13 === inputA13 ) {
        result13.innerHTML = `<h3> both numbers are equal</h3>`;
        
    } else {
        
        alert("Please enter values in numbers");
    }
}