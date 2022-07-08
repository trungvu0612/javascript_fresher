// // Exercises Level 1
// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    name: string | undefined;
    age: number | undefined;
    color: string | undefined;
    legs: number | undefined;

    constructor(name?: string, age?: number, color?: string, legs?: number) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
}

const dog = new Animal("Tèo", 2, "white", 4);

const cat = new Animal("Tí", 1, "yellow", 4);


console.log(dog, cat)