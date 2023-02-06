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
let sum = 0

function averagePoints () {

    for (let i = 0; i < grades.length; i++) {
        sum = sum + grades[i];
    }
    return console.log('The average grade for each student is ' + sum/grades.length);
}

averagePoints()

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

