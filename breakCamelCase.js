// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let stringCompare = string.toLowerCase()
    let answer = ""
    for(let i = 0; i < string.length; i++){
      string[i] !== stringCompare[i] ? answer = answer + " " + string[i] : answer = answer+string[i]
    }
  return answer
}
