//1. String

console.log(typeof("Nehal"))
console.log(typeof('Nehal'))
console.log(typeof(`Nehal`))

//2. Number

console.log(typeof(2))
console.log(typeof("2"))

//3. Boolean

console.log(typeof(true))
console.log(typeof(false))

//4. Undefined

//5. Variables : 1. var, 2. let, 3. const
// syntax : variabletype variablename = value/data;

var username = "nehal";
var userage = 20;
var useremail = "90nehal01@gmail.com";
var userpassword = "nehal1122";
var user;

console.log(username, userage, useremail, userpassword);
console.log(typeof(user));

// Math Functions

var num1 = 2345;
var num2 = 6789;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

//       reassign   redeclare       scope           hoisting
// var     ✅          ✅       global scope          ✅
// let     ✅          ❌       block scope           ❌
// const   ❌          ❌       block scope           ❌
//

// {} -> block / box

var number = 10;
console.log(number);
number = 12;
console.log(number);
var number = 14;
console.log(number);


// let number = 10;
// console.log(number);
// number = 12;
// console.log(number);
// let number = 14;
// console.log(number);


// const number = 10;
// console.log(number);
// number = 12;
// console.log(number);
// const number = 14;
// console.log(number);


{
    var number = 10;
    let number2 = 12;
    const number3 = 14;
    console.log(number2);
    console.log(number3);
}

console.log(number);
console.log(number2);
console.log(number3);

{
    const number5 = 10;
    {
        console.log(number5);
    }
}

console.log(number5)