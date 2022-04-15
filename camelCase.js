// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){
    str = str.includes("-") ? str.split("-") : str.split("_")
    let str2 = []
    str.forEach((elem, i)=>{
                return i > 0 ? str2.push(elem[0].toUpperCase()+ elem.slice(1)): str2.push(elem)
                })
                
    return str2.join("")
  
  }