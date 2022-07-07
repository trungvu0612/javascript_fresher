// // Exercises: Level 2
// 1. Quadratic equation is calculated as follows: ax2 + bx + c = 0.
// Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a: number, b: number, c: number) {
    if (a != 0) {
        let root1: number;
        let root2: number;
        // calculate discriminant
        let discriminant = b * b - 4 * a * c;

        // condition for real and different roots
        if (discriminant > 0) {
            root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

            // result
            console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
        }

        // condition for real and equal roots
        else if (discriminant == 0) {
            root1 = root2 = -b / (2 * a);

            // result
            console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
        }

        // if roots are not real
        else {
            let realPart = (-b / (2 * a)).toFixed(2);
            let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

            // result
            console.log(
                `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
            );
        }
    }
}

// solveQuadEquation(1, 0, -4);

// 2. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr: string[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

// printArray(["trung", "vu", "thanh"])

// 3. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
interface Date {
    day: string,
    time: string
}

const date: Date = {
    day: "08/01/2020",
    time: "04:08",
}

function showDateTime(date: { day: string, time: string }) {
    console.log(date.day, date.time);
}

// showDateTime(date)

// 4. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(a: number, b: number) {
    console.log(b, a)
}

// swapValues(2, 3)

// 5. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr: number[]) {
    let newArr = [];
    for (let i = 1; i < arr.length + 1; i++) {
        newArr.push(arr[arr.length - i])
    }
    console.log(newArr);
}

// reverseArray([1, 2, 3, 4, 5, 6]

// 6. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr: any[]) {
    let capitalizedarray: any[] = arr;
    return capitalizedarray;
}

// capitalizeArray(["trung", "vu", "thanh"])

// 7. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item: any) {
    let newArr: any[] = [];
    newArr.push(item)
    console.log(newArr)
}

// addItem("trung")

// 8. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an ite
function removeItem(index: number) {
    let arr: string[] = ["trung", "vu", "thanh"]
    console.log(arr)
    if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
        console.log(arr)
    } else {
        console.log("please enter correct number")
    }
}

// removeItem(0)

// 9. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(input: number) {
    if (input % 2 === 0) {
        console.log("The number of odds are " + (input / 2))
        console.log("The number of evens are " + (input / 2 + 1))
    } else {
        console.log("please enter odd number")
    }
}

// evensAndOdds(60)

// 10. Write a function which takes any number of arguments and return the sum of the arguments
const sumAr = (...number: number[]) => {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum;
};

// console.log(sumAr(1, 2, 2))

// 11. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    let idArr = "41XTDbE";
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 8; i++) {
        idArr += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return idArr
}

// console.log(userIdGenerator())