// Basic Exercise 1

// let array = [1, 7, -3, 9, 13, 200, 0, 23, 12, 90, 75, 105];
// let max = 0;

// for (let val of array) {
//     if (max < val) {
//         max = val
//     } 
// }

// console.log(max);

// Intermediate Exercise 1

// let students = ['Martin', 'Thomas', 'Klaus', 'Maria', 'David'];
// let grades = [76, 85, 65, 93, 81];

// function averagePoints () {
//     let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//         sum = sum + grades[i];
//     }
//     return result=(sum/grades.length);
// }

// console.log(averagePoints());

// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] < 60) {
//         console.log(students[i] + ' got an F');
//     } else if (grades[i] < 70) {
//         console.log(students[i] + ' got a D');
//     } else if (grades[i] < 80) {
//         console.log(students[i] + ' got a C');
//     } else if (grades[i] < 90) {
//         console.log(students[i] + ' got a B');
//     } else {
//         console.log(students[i] + ' got an A');
//     }
// }

// function classGrade() {
//     if (averagePoints() < 60) {
//         console.log('The class got an F');
//     } else if (averagePoints() < 70) {
//         console.log('The class got a D');
//     } else if (averagePoints() < 80) {
//         console.log('The class got a C');
//     } else if (averagePoints() < 90) {
//         console.log('The class got a B');
//     } else {
//         console.log('The class got an A');
//     }
// }
// classGrade();

// Intermediate Exercise 2

// Function Version

    // function FizzleBuzzle() {
    //     let integer = Math.floor(Math.random()*101)
       
    //     if (Number.isInteger(integer/15)) {
    //         console.log('FizzBuzz');
    //     } else if (Number.isInteger(integer/5)) {
    //         console.log('Buzz');
    //     } else if (Number.isInteger(integer/3)) {
    //         console.log('Fizz');
    //     } else {console.log(integer)}
    // }

    // FizzleBuzzle();

// Loop Version

// for (i = 1; i <= 100; i++) {
//     if (Number.isInteger(i/15)) {
//         console.log('FizzBuzz');
//     } else if (Number.isInteger(i/5)) {
//         console.log('Buzz');
//     } else if (Number.isInteger(i/3)) {
//         console.log('Fizz');
//     } else {console.log(i)}
// }

// Challenge

let students = ["John", "Louis", "Taylor", "Whitney", "Ella", "Bill", "Joe", "Tom", "Christina", "Valentina", "Amanda", "Francis", "Catelyn", "Matthew", "Maria"];
let mathGrades = [55, 78, 64, 90, 43, 74, 99, 87, 67, 34, 88, 76, 91, 71, 55];

let firstName = document.getElementById("firstName").value

function getGrade() {
    if (students.includes(firstName)) {
        let i = students.indexOf(firstName)
        console.log(students[i] + ' got ' + mathGrades[i] + ' points.')
    } else {
        console.log('Nobody with this name is in the class.')
    }
}

getGrade();
