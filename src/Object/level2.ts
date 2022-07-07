export interface Alex {
    email: string;
    skills: string[];
    age: number;
    isLoggedIn: boolean;
    points: number;
}

export interface Asab {
    email: string;
    skills: string[];
    age: number;
    isLoggedIn: boolean;
    points: number;
}

export interface Brook {
    email: string;
    skills: string[];
    age: number;
    isLoggedIn: boolean;
    points: number;
}

export interface Daniel {
    email: string;
    skills: string[];
    age: number;
    isLoggedIn: boolean;
    points: number;
}

export interface John {
    email: string;
    skills: string[];
    age: number;
    isLoggedIn: boolean;
    points: number;
}

export interface Thomas {
    email: string;
    skills: string[];
    age: number;
    isLoggedIn: boolean;
    points: number;
}

export interface Paul {
    email: string;
    skills: string[];
    age: number;
    isLoggedIn: boolean;
    points: number;
}

export interface Users {
    Alex: Alex;
    Asab: Asab;
    Brook: Brook;
    Daniel: Daniel;
    John: John;
    Thomas: Thomas;
    Paul: Paul;
}


// // Exercises: Level 2
let users: Users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
let nameUser = Object.keys(users);
let valueUser = Object.values(users);
let keyUser = Object.entries(users);

// 1. Find the person who has many skills in the users object.
function findSkill() {
    for (let i = 0; i < keyUser.length; i++) {
        if (keyUser[i][1].skills.length > 5) {
            console.log(keyUser[i][0])
        }
    }
}

// findSkill()

// 2. Count logged in users,count users having greater than equal to 50 points from the following object.
function checkLogin() {
    for (let i = 0; i < keyUser.length; i++) {
        if (keyUser[i][1].isLoggedIn) {
            console.log(keyUser[i][0]);
        }
    }
}

// checkLogin()

// 3. Find people who are MERN stack developer from the users object

function mernUser() {
    let mernReact: string[] = [];
    let mernNode: string[] = [];
    let mernMongo: string[] = [];
    let mernExpress: string[] = [];
    // loop to get user
    for (let i = 0; i < keyUser.length; i++) {
        // check user have React
        for (let a = 0; a < keyUser[i][1].skills.length; a++) {
            if (keyUser[i][1].skills[a] === "React") {
                mernReact.push(keyUser[i][0]);
            }
            if (keyUser[i][1].skills[a] === "Node") {
                mernNode.push(keyUser[i][0]);
            }
            if (keyUser[i][1].skills[a] === "Express") {
                mernExpress.push(keyUser[i][0]);
            }
            if (keyUser[i][1].skills[a] === "Express") {
                mernMongo.push(keyUser[i][0]);
            }
        }
    }
    console.log(mernMongo)
}

mernUser()

// 4. Set your name in the users object without modifying the original users object
function setName() {
    const newProperty = {
        Trung: {
            email: 'trung@trung.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
            age: 20,
            isLoggedIn: false,
            points: 40
        }
    }
    const addObject = Object.assign(users, newProperty);
    console.log(addObject);
}

// setName()

// 5. Get all keys or properties of users object
// console.log(nameUser)
// 6. Get all the values of users object
// console.log(valueUser)
// 7. Use the countries object to print a country name, capital, populations and languages.
function countriess() {
    let countries = {name: "Viêt Nam", capital: "Hà Nội", populations: " 9tr", languages: "Vietnamese"}
    console.log(countries)
}

