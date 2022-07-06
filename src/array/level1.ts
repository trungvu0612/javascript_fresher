// // Exercise: Level 1
const countries: string[] = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const webTechs: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
];

console.log(countries, webTechs);

// // 1. Declare an empty array
const emptyArray = new Array();

console.log(emptyArray);

// 2. Declare an array with more than 5 number of elements
const arrayNumber: number[] = [1, 2, 3, 4, 5];

console.log(arrayNumber)

// 3. Find the length of your array
const arrayThree: number[] = [0, 1, 2, 4, 5, 6];

console.log("Length's arrayThree: " + arrayThree.length);

// 4. Get the first item, the middle item and the last item of the array
const arrayFour: string[] = ["apple", "egg", "pineapple", "lemon", "meat"];

const middleItems = Math.floor(arrayFour.length / 2);

console.log("*first item:" + arrayFour[0], "*middle item:" + arrayFour[middleItems], "*last item:" + arrayFour[arrayFour.length - 1]);

// 5. Declare an array called mixedDataTypes,
// put different data types in the array and find the length of the array. The array size should be greater than 5.
const mixedDataTypes: any[] = ["apple", 1, 2, "egg", 3, "pineapple", 4, "lemon", "meat", 5];

console.log(mixedDataTypes.length);
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies: string[] = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
const middleCompanies = Math.floor(arrayFour.length / 2);

console.log("*first item:" + itCompanies[0], "*middle item:" + itCompanies[middleCompanies], "*last item:" + itCompanies[itCompanies.length - 1]);

// 10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

// 11. Change each company name to uppercase one by one and print them out
console.log("11.*****")
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
itCompanies[itCompanies.length - 1] = "and Amazon";
console.log(itCompanies + " are big IT companies.");

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let found = false;
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i] === "Facebook") {
        found = true;
        break;
    }
}
if (found) {
    console.log("Facebook");
} else {
    console.log("not found");
}

// 14. Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
    if ((itCompanies[i].split("o").length - 1) > 1) {
        console.log(itCompanies[i]);
    }
}

// 15. Sort the array using sort() method
const newArraysort = itCompanies.sort();
console.log(newArraysort);

// 16. Sort the array using sort() method
const newArrayreverse = itCompanies.reverse();
console.log(newArrayreverse);

// 17. Slice out the first 3 companies from the array
const newArray17 = itCompanies.slice(0, 3)
console.log(newArray17);

// 18. Slice out the last 3 companies from the array
const newArray18 = itCompanies.slice((itCompanies.length - 3, 4))
console.log(newArray18);

// 19. Slice out the middle IT company or companies from the array
const newArray19 = itCompanies.sort().slice(1, itCompanies.length - 2)
console.log(newArray19)

// 20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies)

// 21. Remove the middle IT company or companies from the array
itCompanies.splice(1, itCompanies.length - 2)
console.log(itCompanies)

// 22. Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)

// 23. Remove all IT companies
// way 1
itCompanies.splice(0, itCompanies.length);
// way 2
itCompanies = [];
// way 3
itCompanies.length = 0;
console.log(itCompanies)