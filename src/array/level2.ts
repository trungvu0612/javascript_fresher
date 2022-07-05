import {countries} from "../country";
import {webTechs} from "../web_techs";

// Exercise: Level 2
// 1. Create a separate countries.js file and store the countries array into this file,
// create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
console.log(countries)
console.log(webTechs)

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text: string = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text);
const newString = text.split(".").join(" ");
console.log(newString)
const newString1 = newString.split(",").join("");
console.log(newString1)
const newString2 = newString1.split(" ")
let i: number;
for(i=0; i<newString2.length; i++){
    if(newString2[i]===""){
        newString2.splice(i, 1)
    };
}
console.log(newString2, newString2.length)

// 3. In the following shopping cart add, remove, edit items
const shoppingCart: string[] = ['Milk', 'Coffee', 'Tea', 'Honey'];
// add
shoppingCart.unshift("Meat")
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart)
// remove
shoppingCart.splice(4, 1)
console.log(shoppingCart)
// edit
shoppingCart.splice(3, 1, "Green tea");
console.log(shoppingCart)
// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.
if(countries.includes("Ethiopia")){
    let a: number;
    for(a=0; a<countries.length;a++){
        if(countries[i]=="Ethiopia"){
            console.log(countries[i].toUpperCase());
        }
    }
}else{
    countries.push("Ethiopia");
}
console.log(countries);
// 5. In the webTechs array check if Sass exists in the array and if
// it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webTechs.includes("Sass")){
    console.log("Sass is a CSS preprocess");
}else{
    webTechs.push("Sass");
    console.log(webTechs);
}
// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd: string[] = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd: string[] = ['Node', 'Express', 'MongoDB'];

const fullStack: string[] = frontEnd.concat(backEnd)

console.log(fullStack)