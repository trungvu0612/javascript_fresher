// // Exercises: Level 2
// 1. Write a code which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F
// let gradeStudent: string | null = prompt("Enter your grade:")
//
// switch (true) {
//     case 100 >= gradeStudent && gradeStudent >= 80:
//         console.log("You are A score")
//         break
//     case 79 >= gradeStudent && gradeStudent >= 70:
//         console.log("You are B score")
//         break
//     case 69 >= gradeStudent && gradeStudent >= 60:
//         console.log("You are C score")
//         break
//     case 59 >= gradeStudent && gradeStudent >= 50:
//         console.log("You are D score")
//         break;
//     case 49 >= gradeStudent && gradeStudent >= 0:
//         console.log("You are F score")
//         break
//     default:
//         console.log('You need enter correct grade!')
// }

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// let enterUser: string | null = prompt("Enter your information:")
// switch (true) {
//     case enterUser == 12 && enterUser <= 2:
//         console.log("winter")
//         break
//     case enterUser >= 9 && enterUser <= 11:
//         console.log("Autumn")
//         break
//     case enterUser >= 6 && enterUser <= 8:
//         console.log("Summer")
//         break
//     case enterUser >= 3 && enterUser <= 5:
//         console.log("Spring")
//         break
//     default:
//         console.log("Please enter correct!")
// }
// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
// let day: string | null = prompt(" What is the day  today?")
// switch (day) {
//     case "Monday":
//         console.log("Monday is a working day")
//         break
//     case "Tuesday":
//         console.log("Tuesday is a working day")
//         break
//     case "Wednesday":
//         console.log("Wednesday is a working day")
//         break
//     case "Thursday":
//         console.log("Thursday is a working day")
//         break
//     case "Friday":
//         console.log("Friday is a working day")
//         break
//     case "Saturday":
//         console.log("Saturday is a weekend")
//         break
//     case "Sunday":
//         console.log("Sunday is a weekend")
//         break
//     default:
//         console.log("please enter day")
// }