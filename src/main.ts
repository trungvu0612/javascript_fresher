import './style.css'


const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Register</h1>
  <form id="form_submit">
      <input type="text" name="username" placeholder="enter your username"/>
      <input type="password" name="password" placeholder="enter your password"/>
      <button type="submit">Register</button>
  </form>
  <h1>Login</h1>
  <form id="login_form">
      <input type="text" name="username1" placeholder="enter your username"/>
      <input type="password" name="password1" placeholder="enter your password"/>
      <button type="submit">login</button>
  </form>
  <h1>Rating</h1>
  <form id="rating">
    <input type="text" name="name-product" placeholder="Products you want rate"/><br>
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

class Statistics {
    ages?: number[];

    constructor(ages?: number[]) {
        this.ages = ages;
    }

    count() {
        return this.ages?.length;
    }

    sum() {
        return this.ages?.reduce((pre, cur) => {
            return pre + cur;
        }, 0)
    }

    min() {
        return Math.min.apply();
    }
}

const ageStudent = new Statistics();
ageStudent.ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 5, 6,];
console.log(ageStudent.min())

