// iven an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

function rowWeights(array){
    //your code here
    let a = 0, b = 0
    array.forEach((elem,i) => {
      i%2 ===0 ? a+=elem : b+=elem
    })
    return [a,b]
  }

//   https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript