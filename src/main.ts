import './style.css'


const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Register</h1>
  <form id="form_submit">
      <input type="text" name="username" placeholder="enter your username"></input>
      <input type="password" name="password" placeholder="enter your password"></input>
      <button type="submit">Regiter</button>
  </form>
  <h1>Login</h1>
  <form id="login_form">
      <input type="text" name="username1" placeholder="enter your username"></input>
      <input type="password" name="password1" placeholder="enter your password"></input>
      <button type="submit">login</button>
  </form>
  <h1>Rating</h1>
  <form id="rating">
    <input type="text" name="name-product" placeholder="Products you want rate"></input><br>
    <input type="radio" id="html" name="fav_language" value="5">
    <label for="html">5</label><br>
    <input type="radio" id="css" name="fav_language" value="3">
    <label for="css">3</label><br>
    <input type="radio" id="javascript" name="fav_language" value="1">
    <label for="javascript">1</label>
    <br>
    <button type="submit">Vote</button>
  </form>
`

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            {userId: 'fg12cy', rate: 5},
            {userId: 'zwf8md', rate: 4.5},
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{userId: 'fg12cy', rate: 5}],
        likes: ['fg12cy'],
    },
]

console.log(users)
// register
let signUp: HTMLFormElement = document.querySelector("#form_submit")!;
signUp.onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(signUp);
    const username = data.get('username') as any;
    const password = data.get('password') as any;
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username) {
            alert("You have already an account!")
            break
        } else {
            const newUser = {
                _id: 'ab12ex',
                username: `${username}`,
                password: `${password}`,
                email: 'brook@brook.com',
                createdAt: '08/01/2020 9:30 AM',
                isLoggedIn: true,
            }
            console.log(newUser)
            users.push(newUser)
            alert("Register successfully")
            console.log(users)
            break
        }
    }
    return false;
};
// login
let signIn: HTMLFormElement = document.querySelector("#login_form")!;
signIn.onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(signIn);
    const username = data.get('username1') as any;
    const password = data.get('password1') as any;
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            if (username[i].isLoggedIn) {
                alert("login successfully")
                break
            } else {
                alert("you are logged in")
                break
            }
        } else {
            alert("You nees register before login")
            break
        }
    }
    return false;
};
// Rating
let rateProduct: HTMLFormElement = document.querySelector("#rating")!;
rateProduct.onsubmit = (e: any) => {
    e.preventDefault()
    let formRatingUser = new FormData(rateProduct)
    let nameProduct = formRatingUser.get("name-product");
    let ratingChoose = formRatingUser.get("fav_language");
    for (let i = 0; i < products.length; i++) {
        if (nameProduct === products[i].name) {
            const newRating = {
                userId: 'fg12cy', rate: parseInt(`${ratingChoose}`)
            }
            products[i].ratings.push(newRating)
            console.log(products[i])
        }
    }
    return false;
}

function AverageRating() {
    for (let i = 0; i < products.length; i++) {
        let arrRate = [];
        let ave = 0;
        for (let a = 0; a < products[i].ratings.length; a++) {
            if (products[i].ratings !== []) {
                arrRate.push(products[i].ratings[a].rate)
            }
        }
        for (let b = 0; b < arrRate.length; b++) {
            ave = (ave + arrRate[b])
        }
        console.log(ave / arrRate.length)
    }
}

AverageRating()




