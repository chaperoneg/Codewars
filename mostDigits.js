// Most digits
// 2187189% of 1,7634,432 of 11,747Gbaja8 Issues Reported
//  JavaScript
// Node v10.x
// VIM
// EMACS
// Instructions
// Output
// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
    var biggestNum = 0;
  
    for(var i = 0; i < array.length; i++) {
    
      if(array[i].toString().length > biggestNum.toString().length) {
        biggestNum = array[i];
      }
      
    }
    
    return biggestNum;
  }
  