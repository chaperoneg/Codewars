// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

function minValue(values){
    //your code here
    values = [...new Set(values)]
    return Number(values.sort().join(""))

  }

//   https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript