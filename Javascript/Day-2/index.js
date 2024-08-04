// 1. Hoisting

number = 10;
console.log(number);
var number;

// 2. Conditional Statement
// If Else, Switch
//If Else Syntax : 
// if (Condition){
//     Statement 1
// } else {
//     Statement 2
// }

//Comparison operators
//>, <, >=, <=, ==, ===

if (10<20){
    console.log(true)
} else {
    console.log(false)
}

if (10>20){
    console.log(true)
} else {
    console.log(false)
}

if (10<=20){
    console.log(true)
} else {
    console.log(false)
}

if (20<=20){
    console.log(true)
} else {
    console.log(false)
}

console.log(2 == "2"); //Comapres only data & not datatype
console.log(2 === 2);
console.log(2 === "2"); // Compares datatype

var num1 = 20;
var num2 = 30;

if (num1 > num2){
    console.log("num1 is greater than num2");
} else {
    console.log("num1 is lesser than num2");
}