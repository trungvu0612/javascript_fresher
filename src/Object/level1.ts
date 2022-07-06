// // Exercises: Level 1
// 1. Create an empty object called dog
// const dog = {};
// // 2. Print the the dog object on the console
// console.log(dog)

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
interface Dog {
    name: string,
    legs: number,
    color: string,
    bark: string,
    breed: string,
}

const dog: Dog = {name: "", legs: 0, color: "", bark: "", breed: ""};
dog.bark = "woof woof";
console.log(dog)
// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = "getDogInfo";
console.log(dog.breed)