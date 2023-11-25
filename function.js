
// Question No.1

function userGreetings(name) {
    let userMessage = "welcome to my web"
    return userMessage

}

console.log(userGreetings());

console.log(userGreetings());
console.log(userGreetings());
console.log(userGreetings());
console.log(userGreetings());

// Question No.2

function checkDate() {
    let currentDate = new Date();

    currentDate = currentDate.toLocaleString()
    console.log(currentDate);
}
checkDate();



// Question No.3

let printName = document.querySelector("#printName");

printName.addEventListener('click', () => {
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;

    let div = document.createElement('h1');
    let fullName = `${firstName} ${lastName} welcome to my web`;
    
    div.textContent = fullName; // Use textContent to set the text content

    // Now, append the h1 element to the document or another container
    // For example, if you want to append it to the body:
    document.body.appendChild(div);
})



//  question No.4


let addValue = document.querySelector("#addValue");

addValue.addEventListener('click', () => {
    let input1 = parseFloat(document.querySelector("#input1").value);
    let input2 = parseFloat(document.querySelector("#input2").value);

    let resultOfAddedValues = document.createElement('h1');
    let result = `resulst is ${input1} + ${input2} = ${input1 + input2} `;
    
    resultOfAddedValues.textContent = result; // Use textContent to set the text content

    // Now, append the h1 element to the document or another container
    // For example, if you want to append it to the body:

    document.body.appendChild(resultOfAddedValues);
})


//          question No.5

function add (){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 + number2;
    document.getElementById('textArea').value = ` the result of Addition is: ${result} `;
}


function subtract (){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 - number2;
    document.getElementById('textArea').value = ` the result of subtract is: ${result} `;
}


function multiply (){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 * number2;
    document.getElementById('textArea').value = ` the result of multiplication is: ${result} `;
}  

function divide (){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 / number2;6
    if(number2 === 0){
        document.getElementById('textArea').value = ` Zero is not dividable number `;
    }
    document.getElementById('textArea').value = ` the result of division is: ${result} `;
}  

//  question No.7

let squareofInput = document.querySelector("#squareofInput");

squareofInput.addEventListener('click', () => {
    let input6 = parseFloat(document.querySelector("#input6").value);
   

    let resultOfSquareValues = document.createElement('h1');
    let result6 = `resulst is ${input6} square ${input6} = ${input6 * input6} `;
    
    resultOfSquareValues.textContent = result6; 

    document.body.appendChild(resultOfSquareValues);
    
})

//  question No.8

let countNumbers = document.querySelector("#countNumbers");

countNumbers.addEventListener('click', () => {
    let input7 = parseInt(document.querySelector("#input7").value);
    let input8 = parseInt(document.querySelector("#input8").value);

    for (let i = input7; i <= input8; i++) {
       
        let result8 = ` ${i} <br> `;

        let resultOfCountingNumbers = document.createElement('h1');
        
        resultOfCountingNumbers.innerHTML = result8; 
    
        document.body.appendChild(resultOfCountingNumbers);
        
    }
   

    
    
})

//          Question No.9

let maxNumbers = [1, 2, 3, 4, 5, 5, 6, 100, 101];
console.log(Math.max(...maxNumbers));


//          question No.11


    
let Array10 = [];

    let sortArray = document.querySelector("#sortArray");

    sortArray.addEventListener('click', () => {
        let input10 = document.querySelector("#input10").value;
        let input11 = parseFloat(document.querySelector("#input11").value);
        let input12 = document.querySelector("#input12").value;

        Array10.push(input10, input11, input12);

        let sortedArray = sortArrayFunction(Array10);

        let resultOfSortedArrays = document.createElement('p');
        resultOfSortedArrays.textContent = `Sorted array is: ${sortedArray}`;
        
        document.body.appendChild(resultOfSortedArrays);
    });

    function sortArrayFunction(arr) {
        // Assuming you want to sort the array in ascending order
        return arr.sort();
    }