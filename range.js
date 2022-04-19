// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

// Example
// Input: 1,3,5,6,7,8

// Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
    return Array.from({ length: (numbers[numbers.length - 1] + 1 - numbers[0])}, (_, i) => numbers[0] + i)
   
   }