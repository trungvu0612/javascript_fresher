// //  Exercises: Functional Programing

export type Product = product[]

export interface product {
    product: string
    price: any
}

const products: Product = [
    {product: 'banana', price: 3},
    {product: 'mango', price: 6},
    {product: 'potato', price: ' '},
    {product: 'avocado', price: 8},
    {product: 'coffee', price: 10},
    {product: 'tea', price: ''},
]

// 1. Print the price of each product using forEach
products.forEach((item) => {
    if (item.price === "" || item.price === " ") {
        console.log("This product not have a price")
    } else {
        console.log(`The ${item.product} is priced at ${item.price}`)
    }
})
// 2. Print the product items as follows using forEach

products.forEach((item) => {
    item.price !== " " && item.price !== ""
        ? console.log(`The price of ${item.product} is ${item.price} euros.`)
        : console.log(`The price of ${item.product} is unknown.`)
})

// 3. Calculate the sum of all the prices using forEach
let sumPrice = 0;
products.forEach((item) => {
    if (item.price !== "", item.price !== " ") {
        sumPrice += item.price;
    }
})
console.log(sumPrice);

// 4. Create an array of prices using map and store it in a variable prices
let priceArr: string[] = [];
products.map((item) => {
    priceArr.push(item.price);
})
console.log(priceArr)

// 5. Filter products with prices
const arrPrice = products.filter((item) => {
    return parseInt(item.price) > 3;
});
console.log(arrPrice)

// 6. Use method chaining to get the sum of the prices(map, filter, reduce)

const sum = products.filter((item) => {
    return (item.price !== "" && item.price !== " ")
}).map((item) => {
    return item.price;
}).reduce((pre, cur) => {
    return pre + cur;
})
console.log(sum)

// 7. Calculate the sum of all the prices using reduce only
const sumReducer = products.reduce((sum, li) => {
    return li.price !== " " && li.price !== "" ? sum + li.price : sum;
}, 0);

console.log(sumReducer);

// 8. Find the first product which doesn't have a price value

const noValue = products.find((i) => {
    return i.price == "" || i.price == " ";
});
console.log(noValue)

// 9. Find the index of the first product which does not have price value

const indexProduct = products.findIndex((value) => {
    return value.price == "" || value.price == " ";
})
console.log(indexProduct)

// 10. Check if some products do not have a price value

const check = products.some((item) => {
    return item.price === "" || item.price === " ";
})
console.log(check)

// 11. Check if all the products have price value
const check = products.every((item) => {
    return item.price === "" || item.price === " ";
})
console.log(check)