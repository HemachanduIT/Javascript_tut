const prompt = require("prompt-sync")()
function getNum(numString) {
    while (true) {
        const number = parseFloat(prompt("enter  number" + numString + ":"))
        if (isNaN(number) || number === 0) {
            console.log("Invalid input and dont enter zero as input")
        } else {
            return number
        }
    }
}
// function avoidZero(numString1){
//     while(true){
//         const number=parseFloat(prompt("enter  number"+ numString+":"))
//         if(number===0){
//             console.log("number should not be zero enter number other than zero")
//         }else{
//             return number
//         }
//     }
// }
const num1 = getNum('one')
const num2 = getNum('two')
const operator = prompt("enter the sign")
let result;
let valid = true;
switch (operator) {
    case "+":
        result = num1 + num2
        break;
    case "-":
        result = num1 - num2
        break;
    case "*":
        result = num1 * num2
        break;
    case "/":
        // if(num2===0){
        //     console.log("zero divison error")
        //     valid=false
        // }
        result = num1 / num2
        break;
    default:
        valid = false
        console.log("invalid input")
        break
}
if (valid) console.log(num1 + operator + num2 + "=" + result)