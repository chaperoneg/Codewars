// Definition
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

function automorphic(n){
    return Math.pow(n,2).toString().endsWith(n) ? "Automorphic":"Not!!"
  }