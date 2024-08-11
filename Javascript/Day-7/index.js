// Q. Sum of all numbers from 10-40.

// function sumOfAllNumbers (starting, ending){
//     var sumOfAll = 0;
//     for(var i = starting; i <= ending; i++){
//         sumOfAll = sumOfAll + i;
//     }
//     console.log(`Sum of all from 10 - 40 : ${sumOfAll}`);
// }
// sumOfAllNumbers(10, 40)

//Q. Factorial of given number

function findFactorial (number){
    var fact = 1;
    for(var i = number; i >= 1; i--){
        fact = fact * i;
    }
    console.log(`Factorial of ${number} : ${fact}`);
}
findFactorial(5)

function isPalindrome(string){
    for(var i = 0; i <= Math.floor((string.length - 1) / 2); i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return "String is not Palindrome.";
        }
    }

    return "String is Palindrome.";
}
const output = isPalindrome("rotaor")
console.log(output, "Output")