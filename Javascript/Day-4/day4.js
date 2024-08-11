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

function drivingLicenceEligibilityChecker(){
    const age = parseInt(document.getElementById('age').value);
    const messageElement = document.getElementById('message');
    if (age > 18 && age <= 60){
        messageElement.textContent = "You are eligible for DL.";
        messageElement.style.color = "red";
    } else if (age < 18 || age >= 60){
        messageElement.textContent = "You are not eligible for DL/LL.";
        messageElement.style.color = "red";
    } else if (age == 18){
        messageElement.textContent = "You are eligible for LL.";
        messageElement.style.color = "red";
    } else {
        messageElement.textContent = "Invalid Age";
        messageElement.style.color = "red";
    }
}