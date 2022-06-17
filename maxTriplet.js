// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
function maxTriSum(numbers){
    //your code here
    numbers = [...new Set(numbers)].sort((a,b)=> b - a)
    return numbers[0] + numbers[1] + numbers[2]
  }

//   const maxTriSum = numbers => {
//     const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
//     return a+b+c
//   }
