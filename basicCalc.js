// Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

function calculate(num1, operation, num2) {
    //TODO: make a basic calculator. 
     return operation === "+"? num1 + num2 : operation === "-"? num1 -num2 : operation === "*"?num1 * num2 : operation === "/" && num2 === 0? null : operation === "/"? num1/num2 : null
   }