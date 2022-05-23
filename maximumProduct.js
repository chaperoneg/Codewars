// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
    // max product
    let max = array[0] * array[1]
    for(let i = 1; i < array.length; i++){
      if(array[i] * array[i-1] > max){
        max = array[i] * array[i-1]
      }
    }
    return max
  }

 // https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript