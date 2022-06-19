// Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

// Notes
// List size is at least 2 .

// List's numbers will only positives (n > 0) .

// Repetition of numbers in the list could occur .

// The newer list's sum should equal the closest prime number .

function minimumNumber(numbers){
    //your code here
    function prime(n){
     if (n < 2) return false
      
      for (let i = 2; i < n; i++){
        if (n % i === 0){
          return false
        }
        
      }return true
    }
    
    let sum = numbers.reduce((a,b)=> a + b)
  
      for(let i = 0; i < 100; i++){
        if(prime(sum + i )){
          return i
        }
      
    }
  }