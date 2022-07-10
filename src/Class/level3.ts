// // Exercises Level 3
// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode)
// and measure of variability(range, variance, standard deviation).
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
// You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class.
// Check the output below.


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
        return this.ages != undefined ? Math.min.apply(Math, this.ages) : alert("error");
    }

    max() {
        return this.ages != undefined ? Math.max.apply(Math, this.ages) : alert("error");
    }

    range() {
        return this.ages != undefined ? Math.max.apply(Math, this.ages) - Math.min.apply(Math, this.ages) + 1 : alert("error");
    }

    mean() {
        return this.ages != undefined ? Math.floor(this.ages?.reduce((pre, cur) => {
            return pre + cur;
        }, 0) / this.ages?.length): alert("error");
    }

    median() {
        return this.ages != undefined ? this.ages?.sort(function (a,b){return a-b})[Math.floor(this.ages.length /2)] : alert("error");
    }

    mode() {
        
    }
}

const ageStudent = new Statistics();
ageStudent.ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 5, 6, 12];
console.log(ageStudent.median())

