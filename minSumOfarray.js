// ntroduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always has even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342

function minSum(arr) {
    // your code here
    let answer = 0
    arr = arr.sort((a,b) => a -b)
    let u = arr.length
    for(let i = 0; i < u/2; i++){
      answer += arr[i] * arr[u -1 -i]
    }
    return answer
  }

//   const minSum = arr =>
//   arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);