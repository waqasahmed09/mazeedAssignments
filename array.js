
// // 1. Declare an empty array using JS literal notation to store
// // student names in future.

// let studentNames = [];

// // 2.  Declare an empty array using JS object notation to store
// // student names in future

// let studentNames1 = {
//     0: 'waqas',
//     1: 'Razzaq',
//     2: 'Sajjad',

// };

// //   3. Declare and initialize a strings array.

// let array1 = ["mango", "apple", "banana", "juice", "grapes"];

// // 4. Declare and initialize a numbers array.

// let array2 = [1, 2, 3, 4, 5, 6];

// // 5 Declare and initialize a boolean array.

// let array3 = [true, false, true, false, false, true];

// // 6. Declare and initialize a mixed array.

// let array4 = ["array", 1, 2, 4, true, false];

// // 7. Declare and Initialize an array and store available mobile
// // networks in Pakistan.

// let networksAvailableInPakistan = ["jazz", "warid", "zong", "telenor", "ufone"];


// // 8. Declare and Initialize an array and store available education
// // qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// // M. Phil., PhD). Show the listed qualifications in your browser
// // like:

// let QualificationInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

// console.log(`<li> ${QualificationInPakistan}</li>`);


// // 9. Declare and initialize an empty array to store top movies of
// // 2015. Add movies one by one in an array. Display the elements
// // & length of array in your browser. (Use array’s length method)


// let topMovies2015 = []; // Declare an empty array to store top movies of 2015

// function displayMovies() {
//     // Add movies one by one to the array
//     topMovies2015.push("Mad Max: Fury Road");
//     topMovies2015.push("The Martian");
//     topMovies2015.push("Inside Out");
//     topMovies2015.push("Star Wars: The Force Awakens");

//     let result20 = document.querySelector(".result09");

//     // Display the elements and the length of the array in the browser
//     result20.textContent = "Movies of 2015: " + topMovies2015.join(', ') + ". Length: " + topMovies2015.length;
// }


// // 10. Declare and Initialize an array with your favorite cars. Show
// // a. First index of the array
// // b. Car at first index of the array
// // c. Last index of the array

// let favoriteCars = ["audi", "volvo", "lamborghini", "Ford"];
// console.log(`first index of the array is ${favoriteCars.indexOf("audi")} `);
// console.log(`car at the index of the array is ${favoriteCars[0]} `);
// console.log(`first index of the array is ${favoriteCars.indexOf("ford")} `);
// console.log(`car at the index of the array is ${favoriteCars[3]} `);

// let studentname = ["ammar", "daniyal", "murtaza"];
// let studentScore = [320, 230, 480];
// let studentPercentage = studentScore / 500 * 100;

// console.log(` Score of ${studentNames[0]} is ${studentScore[0]} is ${studentPercentage} `);

// let scoreOfStudents = [320, 230, 480, 120 ]
// console.log(scoreOfStudents);
// scoreOfStudents.sort();
// console.log(scoreOfStudents);

// let sortedFruits = ["mango", "apple", "banana", "juice", "grapes"];
// console.log(sortedFruits);
// sortedFruits.sort();
// console.log(sortedFruits);

// // let cityArray = [ "Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];

// // console.log(cityArray);

// // let selectedCityArray = selectedCityArray.splice("islamabad", "Quetta");  
// // console.log(selectedCityArray);

// let  arr = ["This" ,  "is" , "my" ,  "cat"];
//  arr = arr.join(" ");
//  console.log(arr);




//  function displaySelectedManufacturer() {
//     const selectElement = document.getElementById("phone-manufacturers");
//     const selectedManufacturer = selectElement.options[selectElement.selectedIndex].value;
//     alert("Selected Manufacturer: " + selectedManufacturer);
//   }



//   let fruit = ["apple", "banana", "mango", "orange", "strawberry"];


//   for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);   
// }

// for (let i = 0; i < fruit.length; i++) {
//     console.log(` Element at Index ${i} is ${fruit[i]}`);
// }



// let numOfItems = +prompt("enter value to input items");

// let itemsOfArray = [];

// for (let i = 0; i < numOfItems; i++) {
//     let numOfItems2 = prompt(`Enter items to keep in the array ${i}: `)
//     itemsOfArray.push(numOfItems2)
// // }


// // console.log(`number of items in the array ${numOfItems}`);
// // console.log(itemsOfArray);


// //7


// //  let pandraTkGinti = document.querySelector("#pandraTkGinti");

// //  for ( i = 1; i <= 15; i++ ){
// //     pandraTkGinti.textContent += ` ${i}, `;

// //  }

// let pandraTkGintiUlti = document.querySelector("#pandraTkGintiUlti");

// for (i = 15; i >= 1; i--) {
//     pandraTkGintiUlti.textContent += ` ${i}, `;

// }


// let even = document.querySelector("#even");

// for (i = 0; i <= 20; i += 2) {
//     even.textContent += ` ${i}, `;

// }


// let odd = document.querySelector("#odd");

// for (i = 1; i <= 20; i += 2) {
//     odd.textContent += ` ${i}, `;

// }



// let evenK = document.querySelector("#evenK");

// for (i = 2; i <= 20; i += 2) {
//     evenK.textContent += ` ${i}K, `;

// }

// let userItem = prompt("enter bakery item");
// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// let isAvailable = false;
// for (let i = 0; i < bakeryItems.length; i++) {
//     if(userItem.toLowerCase() ===bakeryItems[i]){
//         console.log(`${bakeryItems[i]} Available`)
//         isAvailable = true;
//         break
//     }
// }
// if (isAvailable === false  ){
//     console.log(` Halwa Poori Kha lo aj janii`);
// }

let largeNumber = [24, 53, 78, 91, 12, 99];
console.log(largeNumber);

largeNumber = largeNumber.sort();
console.log(largeNumber);
let largeNumber1 = largeNumber.slice(-1);
console.log(largeNumber1.join());
console.log(largeNumber1);




