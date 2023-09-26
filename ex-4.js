// Exercise #4 Grouping Function with Objects

// Start coding here
let calculator = {
    add:function add(a,b){
        return(a+b)
    },
    subtract:function subtract(a,b){
        return(a-b)
    },
    multiply:function multiply(a,b){
        return(a*b)
    },
    divide:function divide(a,b){
        return(a/b)
    }
};
let resultAdd = calculator.add(10,20);
console.log(resultAdd);
let resultDivide=calculator.divide(3000,10);
console.log(resultDivide);
