
// Exercise: Level 3
// 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const ages: number[] = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// - Sort the array and find the min and max age
ages.sort();
console.log("Min age is " + ages[0] + ",Max age is " + ages[ages.length-1]);
// - Find the median age(one middle item or two middle items divided by two)
const middleAges = Math.floor((ages.length/2))
console.log((ages[middleAges] + ages[middleAges+1])/2);
// - Find the average age(all items divided by number of items)
const newArr: number[] = [];
let b: number;
for(b=0;b<ages.length;b++){
    if(ages[b]!==ages[b+1]){
        newArr.push(ages[b]);

    }
}
console.log(newArr);
let c: number;
let sum: number = 0;
for(c=0; c< newArr.length; c++){
    sum += newArr[c];
}
console.log(sum / ages.length);
// - Find the range of the ages(max minus min)
console.log(ages[ages.length-1] - ages[0]);
// - Compare the value of (min - average) and (max - average), use abs() method
// 1.1.Slice the first ten countries from the countries array
console.log(countries.slice(0,10));
// 2. Find the middle country(ies) in the countries array
const middleCountries = Math.floor(countries.length / 2);
console.log(countries[middleCountries]);
// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if(countries.length%2==0){
   const firstArr = countries.splice(0, countries.length/2);
   console.log(firstArr, countries);
}else{
   countries.unshift("Vietnam");
   console.log(countries)
}