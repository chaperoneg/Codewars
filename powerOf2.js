// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// function isPowerOfTwo(n){
//     //.. should return true or false ..
//     return Math.log(n)/Math.log(2)%1===0
//   }
if(n === 0) {return false}
else{
  return n && !(n & (n - 1));
}