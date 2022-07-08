// // Exercises Level 2
// 1. Override the method you create in Animal class

class Animal {
    name: string | undefined;
    age: number | undefined;
    color: string | undefined;
    legs: number | undefined;
    sound: string | undefined;

    constructor(name?: string, age?: number, color?: string, legs?: number) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    soundAnimal(s?: string): void {
        console.log(this.sound = s)
    }
}

const dog = new Animal();
dog.soundAnimal("woof")


class Fish extends Animal {
    soundAnimal(s?: string): void {
        super.soundAnimal(s)
        console.log(`${this.name} dont have sound`)
    }
}

const yellowFish = new Fish();
yellowFish.soundAnimal()