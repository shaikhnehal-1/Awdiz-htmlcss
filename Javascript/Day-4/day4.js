// Functions - Syntax
// function AnyName(){
//     multiple lines of code
// }

function AnyName(){
    console.log("Nehal");
}
AnyName();

function addition(){
    console.log(1 + 2, "from addition");
}
addition();

function substraction(){
    console.log(2 - 1, "from substraction");
}
substraction();

function numbers(number1, number2){
    console.log(number1 + number2);
}
numbers(5, 29);

// Assignment

function drivingLicenceEligibilityChecker(age){
    console.log("Age = ", age);
    if (age > 18 && age <= 60){
        console.log("You are eligible for DL.");
    } else if (age < 18 || age >= 60){
        console.log("You are not eligible for DL/LL");
    } else if (age == 18){
        console.log("You are eligible for LL.");
    } else {
        console.log("Invalid Age")
    }
}
drivingLicenceEligibilityChecker(18);