// Basic Exercise 1

let array = [1, 7, -3, 9, 13, 200, 0, 23, 12, 90, 75, 105];
let max = 0;

for (let val of array) {
    if (max < val) {
        max = val
    } 
}

console.log(max);

// Intermediate Exercise 1

let students = ['Martin', 'Thomas', 'Klaus', 'Maria', 'David'];
let grades = [76, 85, 65, 93, 81];

function averagePoints () {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum = sum + grades[i];
    }
    return result=(sum/grades.length);
}

console.log(averagePoints());

for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 60) {
        console.log(students[i] + ' got an F');
    } else if (grades[i] < 70) {
        console.log(students[i] + ' got a D');
    } else if (grades[i] < 80) {
        console.log(students[i] + ' got a C');
    } else if (grades[i] < 90) {
        console.log(students[i] + ' got a B');
    } else {
        console.log(students[i] + ' got an A');
    }
}

function classGrade() {
    if (averagePoints() < 60) {
        console.log('The class got an F');
    } else if (averagePoints() < 70) {
        console.log('The class got a D');
    } else if (averagePoints() < 80) {
        console.log('The class got a C');
    } else if (averagePoints() < 90) {
        console.log('The class got a B');
    } else {
        console.log('The class got an A');
    }
}
classGrade();

// Intermediate Exercise 2

