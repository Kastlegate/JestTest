

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

// // object with math functions



// function add(number1, number2)
// {
//     return parseFloat(number1) + parseFloat(number2);
// }

// function subtract(number1, number2)
// {
//     return number1 - number2;
// }

// function multiply(number1, number2)
// {
//     return number1 * number2;
// }

// function divide(number1, number2)
// {
//     return number1 / number2;
// }






export { catipalIdeaGoodSir, reverseString };