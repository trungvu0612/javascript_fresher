// // Exercises: Level 3
// 1. Create an object literal called personAccount.
// It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome,
// addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
function createObject() {
    const personalAccount = {
        firstName: "A",
        lastName: "b",
        incomes: {
            incomes: 7,
            description: "",
        },
        expenses: 9,
        totalIncome: function () {
        },
        totalExpense: function () {
        },
        accountInfo: function () {
        },
        addIncome: function () {
        },
        addExpense: function () {
        },
        accountBalance: function () {
        }
    }
    console.log(personalAccount)
}

// 2. Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

