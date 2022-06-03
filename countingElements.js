// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}


function count(array){
    //your code here
    return array.reduce((acc,c)=>{
      acc[c] = (acc[c] || 0) + 1
      return acc
    },{})
    
    
  }
//   function count(array){
//     return array.reduce(function (stack, value) {
//       return stack[value] ? stack[value]++ : stack[value] = 1, stack;
//     }, {});
//   }