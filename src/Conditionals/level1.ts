// // Exercises: Level 1
// // 1. Get user input using prompt(“Enter your age:”). If user is 18 or older ,
// give feedback:'You are old enough to drive' but if not 18 give another
// feedback stating to wait for the number of years he needs to turn 18.
// let enterNumber: string | null;
// enterNumber = prompt("Enter your age:");
// if (enterNumber != null && enterNumber != "") {
//     if (enterNumber < 18) {
//         alert(`You are left with ${18 - enterNumber} years to drive.`)
//     } else {
//         alert("You are old enough to drive.")
//     }
// } else {
//     alert("please enter your age!!")
// }
// // 2. Compare the values of myAge and yourAge using if … else.
// Based on the comparison and log the result to console stating who is older (me or you).
// Use prompt(“Enter your age:”) to get the age as input.
// let enterYourAge = prompt("2. Enter your age")
// if (enterYourAge !== "" && enterYourAge !== null) {
//     if (enterYourAge > 22) {
//         alert(`You are ${enterYourAge - 22} years older than me.`);
//     } else if (enterYourAge < 22) {
//         alert(`${22 - enterYourAge} years younger than me`);
//     } else {
//         alert("We are friend.");
//     }
// }
// // 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
// * using if else.
// * ternary operator.
// way 1
// let a = 4;
// let b = 3;
// if (a > b) {
//     console.log("a is greater than b")
// } else {
//     console.log("b is greater than a")
// }
// // way 2
// a > b ? console.log("a is greater than b") : console.log("b is greater than a")
// // 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// let checkNumber = prompt("3. Enter number:")
// if (checkNumber != "" && checkNumber !== null) {
//     if (checkNumber % 2 == 0) {
//         alert(`${checkNumber} is an even number`)
//     } else {
//         alert(`${checkNumber} is an odd number`)
//     }
// }
