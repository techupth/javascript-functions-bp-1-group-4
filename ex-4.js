// Exercise #4 Grouping Function with Objects

// Start coding here
let calculator = {
    add:(a,b) => a+b,
    subtract:(a,b) => a-b,
    multiply:(a,b) => a*b,
    divide:(a,b) => {
        return a/b
    }
};

let resultAdd = calculator.add(10,20)
console.log(resultAdd)

let resultDivide = calculator.divide(3000,10)
console.log(resultDivide)
