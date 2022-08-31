// A Tidy number is a number whose digits are in non-decreasing order.

function tidyNumber(n){
    //your code here
    n = [...n.toString()]
    let ans = 0
    for(let i=1; i < n.length; i++){
      if(+n[i] < +n[i-1]){
        ans ++
      }
    }
    return ans === 0
  }