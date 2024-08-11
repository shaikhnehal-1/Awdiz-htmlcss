// function questionOne (starting, ending){
//     for(var i = starting; i <= ending; i++) {
//         console.log(i);
//     }
// }
// questionOne(20, 40)

// function questionTwo (starting, ending) {
//     for(var i = starting; i <= ending; i += 2) {
//         console.log(i);
//     }
// }
// questionTwo(1, 100)

// function questionThree (starting, ending, sequence) {
//     for(var i = starting; i <= ending; i += sequence) {
//         console.log(i);
//     }
// }
// questionThree(50, 150, 10)


// function from10To1 (starting, ending) {
//     for(var i = starting; i >= ending; i--) {
//         console.log(i);
//     }
// }
// from10To1(10, 1)

// function from40To20 (starting, ending, sequence) {
//     for(var i = starting; i >= ending; i -= sequence){
//         console.log(i);
//     }
// }
// from40To20(40, 20, 3)

// function reverseOdd (starting, ending, mod){
//     for(var i = starting; i >= ending; i--) {
//         if(i % mod == 1){
//             console.log(i);
//         }
//     }
// }
// reverseOdd(40, 0, 2)

function countEvenOdd (starting, ending){
    var evenCount = 0;
    var oddCount = 0;
    for(var i = starting; i >= ending; i--){
        if(i % 2 == 0){
            evenCount++;
        } else {
            oddCount++;
        }
    }
    console.log(`Even Count : ${evenCount}`)
    console.log(`Odd Count : ${oddCount}`);
}
countEvenOdd(60, 20)