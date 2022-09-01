// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

function sumTriangularNumbers(n) {
    let sum = 0
    for(let i=1; i <= n; i++){
      sum += series(i)
    }
    return sum
  
  }
  function series(n){
    return n <= 0? 0 : n === 1 ? 1 : (n) + series(n-1)
  }