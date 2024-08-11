//Arrow Function -> Syntax
// const addition = () => {}
// Example : Find given number is even or odd
// const isEvenOrOdd = (number) => {

//     if ((number % 2) == 0){
//         console.log(number, "is an even number.")
//     } else {
//         console.log(number, "is an odd number.")
//     }
// }

// isEvenOrOdd();

// Template Literals -> to make dynamic strings. -> ${variable}

var age = 25;
var name = "Nehal";
console.log(`I am ${name} and My age is ${age}.`)


const isEvenOrOdd = (number) => {

    if ((number % 2) == 0){
        console.log(`Given number ${number} is Even.`);
    } else {
        console.log(`Given number ${number} is Odd.`);
    }
}

isEvenOrOdd(13);

// Loops -> For & While

for (var i = 1; i <= 10; i++) {
    console.log(i);
}
