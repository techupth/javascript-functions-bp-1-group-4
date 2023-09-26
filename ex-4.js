// Exercise #4 Grouping Function with Objects

// Start coding here
let add = (a, b) => {
    return a + b
    
};
add(10, 5);
//----------------------------
let subtract = (a, b) => {
    return a - b
};

subtract(10, 5);
///---------------------------
let multiply = (a, b) => {
    return a * b
};

multiply(10, 5);
//----------------------------
let divide = (a, b) => {
    return a / b
};

divide(10, 5);
//----------------------------

let calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};

let resultAdd = add(10, 20);
console.log(resultAdd);

let resultDivide = divide(3000, 10);
console.log(resultDivide);

