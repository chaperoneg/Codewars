// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

function multiples(m, n){
    // code here
    let ans = []
    
    for(let i=n; i != n*m + n;){
      
      ans.push(i)
      Math.sign(n)=="-"? i-=n : i+=n
    }
    return ans
  }