// You are provided with an array of positive integers and an additional integer n (n > 1).

// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

function modifiedSum(a, n) {
    // Write your code here
    return a.reduce((acc,c) => acc + c**n,0) - a.reduce((acc,c) => acc + c,0)
  }