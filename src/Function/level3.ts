// // Exercises: Level 3
// 1. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt().
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
    let input1 = prompt("Input is the number of characters:")
    let input2 = prompt(" Input is the number of ids which are supposed to be generated:")
    if (input1 !== null && input2 !== null) {
        let convertInput1 = parseInt(input1);
        let convertInput2 = parseInt(input2)
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let arrId = [];
        let id: string = "";
        for (let a = 0; a < convertInput2; a++) {
            for (let i = 0; i < convertInput1; i++) {
                id += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            arrId.push(id);
            id = "";
        }
        console.log(arrId);
        return
    }
    return;
}

// console.log(userIdGeneratedByUser())
// 2. Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(code: string, amount: number) {
    let arrColor: any[] = [];
    if (code === "hexa") {
        for (let i = 0; i < amount; i++) {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            arrColor.push("#" + randomColor);
        }
        return arrColor;
    } else if (code === "rgb") {
        const randomBetween = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1));
        for (let i = 0; i < amount; i++) {
            let arrRgb: number[] = []
            for (let a = 0; a < 3; a++) {
                let codeColor: number = randomBetween(0, 255);
                arrRgb.push(codeColor);
            }
            arrColor.push(`rgb(${arrRgb})`);
            arrRgb = [];
        }
        return arrColor;
    } else {
        alert("Please enter the correct color code!")
        return;
    }

}

// console.log(generateColors("rgb", 2))

// 3. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr: any[]) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// 4. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(input: number) {
    let factorialNumber: number = 1;
    for (let i = 1; i < input + 1; i++) {
        factorialNumber *= i;
    }
    return factorialNumber;
}

// console.log(factorial(8))

// 5. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(input?: any) {
    if (input === undefined) {
        return "Empty"
    }
    return input;

}

// console.log(isEmpty("trung"))

// 6. Write a function called average, it takes an array parameter and returns the average of the items.
// Check if all the array items are number types. If not give return reasonable feedback.
function average(arr: any[]) {
    let arrNumber: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "number") {
            arrNumber.push(arr[i])
        }
    }

    if (arrNumber.length == 0) {
        return "This array no have number";
    } else {
        let aveArrNumber = 0;
        for (let i = 0; i < arrNumber.length; i++) {
            aveArrNumber += arrNumber[i];
        }
        return aveArrNumber / arrNumber.length;
    }
}

// console.log(average(["trung", 1, 2, 3, 4, "test", "function", "go"]))