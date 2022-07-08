// // Exercises: Destructuring and Spreading
// Create a function called getPersonInfo. The getPersonInfo function takes an object parameter.
// The structure of the object and the output of the function is given below.
// Try to use both a regular way and destructuring and compare the cleanness of the code.
// If you want to compare your solution with my solution, check this link.
export interface Person {
    firstName: string;
    lastName: string;
    age: number;
    country: string;
    job: string;
    skills: string[];
    languages: string[];
}

const person: Person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 25,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}


function getPersonInfo(obj: Person) {
    const {firstName, lastName, age, country, job, skills, languages} = obj;
    const [am, eng, sou] = languages;
    const skillEnd = skills.pop()
    const convertArr = skills.toString().split(",").join(", ");
    return `
    ${firstName} ${lastName} lives in ${country}. He is  ${age} years old. He is an ${job}. 
    He teaches ${convertArr} and ${skillEnd}.
    He speaks ${am}, ${eng} and a little bit of ${sou}`
}

console.log(getPersonInfo(person));