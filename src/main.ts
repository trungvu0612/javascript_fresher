import './style.css'
import {countries} from "./country";
import {webTechs} from "./web_techs";

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

// // ARRAYS
// // Exercise: Level 1
// const countries: string[] = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
// ]
//
// const webTechs: string[] = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
// ];
//
// console.log(countries,webTechs);
//
// // 1. Declare an empty array
// const emptyArray = new Array();
//
// console.log(emptyArray);
//
// // 2. Declare an array with more than 5 number of elements
// const arrayNumber: number[] = [1,2,3,4,5];
//
// console.log(arrayNumber)
//
// // 3. Find the length of your array
// const arrayThree: number[] = [0,1,2,4,5,6];
//
// console.log("Length's arrayThree: "+ arrayThree.length);
//
// // 4. Get the first item, the middle item and the last item of the array
// const arrayFour: string[] = ["apple", "egg", "pineapple", "lemon", "meat"];
//
// const middleItems = Math.floor(arrayFour.length / 2);
//
// console.log("*first item:"+arrayFour[0], "*middle item:"+arrayFour[middleItems], "*last item:"+arrayFour[arrayFour.length-1]);
//
// // 5. Declare an array called mixedDataTypes,
// // put different data types in the array and find the length of the array. The array size should be greater than 5.
// const mixedDataTypes: Array<any> = ["apple",1, 2, "egg",3, "pineapple",4, "lemon", "meat" ,5];
//
// console.log(mixedDataTypes.length);
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies: string[] = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. Print the array using console.log()
console.log(itCompanies);

// // 8. Print the number of companies in the array
// console.log(itCompanies.length);

// // 9. Print the first company, middle and last company
// const middleCompanies = Math.floor(arrayFour.length / 2);
//
// console.log("*first item:"+itCompanies[0], "*middle item:"+itCompanies[middleCompanies], "*last item:"+itCompanies[itCompanies.length-1]);

// // 10. Print out each company
// let i: number;
// for(i = 0; i< itCompanies.length; i++){
//     console.log(itCompanies[i]);
// }

// // 11. Change each company name to uppercase one by one and print them out
// console.log("11.*****")
// for(i = 0; i< itCompanies.length; i++){
//     console.log(itCompanies[i].toUpperCase());
// }

// // 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(itCompanies + " are big IT companies.");

// // 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// for(i = 0; i< itCompanies.length; i++){
//     if(itCompanies[i]==="Facebook") {
//         console.log(itCompanies[i]);
//     }else{
//         console.log("not found");
//     }
// }

// // 14. Filter out companies which have more than one 'o' without the filter method
// for(i = 0; i< itCompanies.length; i++){
//     if((itCompanies[i].split("o").length-1)>1){
//         console.log(itCompanies[i]);
//     }
// }

// // 15. Sort the array using sort() method
// const newArraysort = itCompanies.sort();
// console.log(newArraysort);

// // 16. Sort the array using sort() method
// const newArrayreverse = itCompanies.reverse();
// console.log(newArrayreverse);

// // 17. Slice out the first 3 companies from the array
// const newArray17 = itCompanies.slice(0,3)
// console.log(newArray17);

// // 18. Slice out the last 3 companies from the array
// const newArray18 = itCompanies.slice((itCompanies.length-3, 4))
// console.log(newArray18);

// // 19. Slice out the middle IT company or companies from the array
// const newArray19 = itCompanies.sort().slice(1, itCompanies.length-2)
// console.log(newArray19)

// // 20. Remove the first IT company from the array
// itCompanies.shift();
// console.log(itCompanies)

// // 21. Remove the middle IT company or companies from the array
// itCompanies.splice(1, itCompanies.length-2)
// console.log(itCompanies)

// // 22. Remove the last IT company from the array
// itCompanies.pop()
// console.log(itCompanies)

// // 23. Remove all IT companies
// itCompanies.splice(0, itCompanies.length);
// console.log(itCompanies)

// // Exercise: Level 2
// 1. Create a separate countries.js file and store the countries array into this file,
// create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
// console.log(countries)
// console.log(webTechs)

// // 2. First remove all the punctuations and change the string to array and count the number of words in the array
// let text: string = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(text);
// const newString = text.split(".").join(" ");
// console.log(newString)
// const newString1 = newString.split(",").join("");
// console.log(newString1)
// const newString2 = newString1.split(" ")
// let i: number;
// for(i=0; i<newString2.length; i++){
//     if(newString2[i]===""){
//         newString2.splice(i, 1)
//     };
// }
// console.log(newString2, newString2.length)

// // 3. In the following shopping cart add, remove, edit items
// const shoppingCart: string[] = ['Milk', 'Coffee', 'Tea', 'Honey'];
// // add
// shoppingCart.unshift("Meat")
// console.log(shoppingCart);
// shoppingCart.push("Sugar");
// console.log(shoppingCart)
// // remove
// shoppingCart.splice(4, 1)
// console.log(shoppingCart)
// // edit
// shoppingCart.splice(3, 1, "Green tea");
// console.log(shoppingCart)
// // 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.
// if(countries.includes("Ethiopia")){
//     let a: number;
//     for(a=0; a<countries.length;a++){
//         if(countries[i]=="Ethiopia"){
//             console.log(countries[i].toUpperCase());
//         }
//     }
// }else{
//     countries.push("Ethiopia");
// }
// console.log(countries);
// // 5. In the webTechs array check if Sass exists in the array and if
// // it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// if(webTechs.includes("Sass")){
//     console.log("Sass is a CSS preprocess");
// }else{
//     webTechs.push("Sass");
//     console.log(webTechs);
// }
// // 6. Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd: string[] = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd: string[] = ['Node', 'Express', 'MongoDB'];
//
// const fullStack: string[] = frontEnd.concat(backEnd)
//
// console.log(fullStack)

// // Exercise: Level 3
// // 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// const ages: number[] = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// // - Sort the array and find the min and max age
// ages.sort();
// console.log("Min age is " + ages[0] + ",Max age is " + ages[ages.length-1]);
// // - Find the median age(one middle item or two middle items divided by two)
// const middleAges = Math.floor((ages.length/2))
// console.log((ages[middleAges] + ages[middleAges+1])/2);
// // - Find the average age(all items divided by number of items)
// const newArr: number[] = [];
// let b: number;
// for(b=0;b<ages.length;b++){
//     if(ages[b]!==ages[b+1]){
//         newArr.push(ages[b]);
//
//     }
// }
// console.log(newArr);
// let c: number;
// let sum: number = 0;
// for(c=0; c< newArr.length; c++){
//     sum += newArr[c];
// }
// console.log(sum / ages.length);
// // - Find the range of the ages(max minus min)
// console.log(ages[ages.length-1] - ages[0]);
// - Compare the value of (min - average) and (max - average), use abs() method
// 1.1.Slice the first ten countries from the countries array
console.log(countries.slice(0,10));
// 2. Find the middle country(ies) in the countries array
const middleCountries = Math.floor(countries.length / 2);
console.log(countries[middleCountries]);
// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if(countries.length%2==0){
   const firstArr = countries.splice(0, countries.length/2);
   console.log(firstArr, countries);
}else{
   countries.unshift("Vietnam");
   console.log(countries)
}





