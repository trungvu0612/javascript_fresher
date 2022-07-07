// // Exercises: Level 1
// 1. Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName: string, lastName: string) {
    return `${firstName}, ${lastName}`
}

// console.log(fullName("Trung", "VU"))

// 2. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a: number, b: number) {
    let sum: number = 0;
    sum = a + b;
    return sum
}

// console.log(addNumbers(10, 20));

// 3. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
function calculates_areaOfCircle(r: number) {
    let area: number = 0;
    area = 3.14 * r * r;
    return area;
}

// console.log(calculates_areaOfCircle(5));

// 4. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(c: number) {
    let f: number = 0;
    f = (c * 9 / 5) + 32;
    return f;
}

// console.log(convertCelciusToFahrenheit(22));

// 5. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function bmi() {
    let weight: string | null = prompt("Enter your weight:");
    let height: string | null = prompt("Enter your height");
    if (weight !== null && height !== null) {
        let convertWeight = parseInt(weight);
        let convertHeight = parseInt(height)
        let valueBmi = convertWeight / ((convertHeight) ^ 2);
        if (valueBmi < 18.5) {
            alert(`Your BMI is ${valueBmi}, You are Underweight`)
        }
        if (24.9 >= valueBmi && valueBmi >= 18.5) {
            alert(`Your BMI is ${valueBmi}, You are Normal weight`)
        }
        if (29.9 >= valueBmi && valueBmi >= 25) {
            alert(`Your BMI is ${valueBmi}, You are Overweight`)
        }
        if (valueBmi >= 30) {
            alert(`Your BMI is ${valueBmi}, You are Obese`)
        }
        return valueBmi
    } else {
        alert("Please enter number")
        return
    }
}

// bmi()

// 6. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month: number) {
    if (month !== null && month <= 12 && month >= 1) {
        if (month >= 9 && month <= 11) {
            console.log("Autumn")
        } else if (month >= 6 && month <= 8) {
            console.log("Summer")
        } else if (month >= 3 && month <= 5) {
            console.log("Spring")
        } else if (month == 12 && month <= 2) {
            console.log("winter")
        }
    } else {
        console.log("Please enter correct!")
    }
}

// checkSeason(5);
