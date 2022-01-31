

// function that capitalizes a string
function catipalIdeaGoodSir(stringTheory){
    return stringTheory.charAt(0).toUpperCase() + stringTheory.slice(1);
}

console.log(catipalIdeaGoodSir("hi there"))

// function that reverses a string
function reverseString(stringBeans){
    return stringBeans.split("").reverse().join("");
}

console.log(reverseString("emordnilap a ton saw siht"))

// object with math functions
let calculator = {
    add: (number1, number2) => number1 + number2,
    subtract: (number1, number2) => number1 - number2,
    multiply: (number1, number2) => number1 * number2,
    divide: (number1, number2) => number1 / number2    
}

console.log("5 + 5 = " + calculator.add(5, 5));
console.log("5 + 5 = " + calculator.subtract(5, 5));
console.log("5 + 5 = " + calculator.multiply(5, 5));
console.log("5 + 5 = " + calculator.divide(5, 5));







export { catipalIdeaGoodSir, reverseString, calculator };