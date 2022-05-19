// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    //happy coding!
    let obj = A.reduce((acc,cur)=> {
      acc[cur] = (acc[cur] || 0)+ 1
      return acc
    }, {})
    
    for(let n in obj){
      if (Number(obj[n]) % 2 !== 0){
        return Number(n)
      }
    }
  }


  

//   const findOdd = (xs) => xs.reduce((a, b) => a ^ b);