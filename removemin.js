// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) { 
    let numbersCopy = [...numbers]
    numbersCopy.splice(numbers.indexOf(Math.min(...numbers)),1)
    return numbersCopy
  }



  //const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));