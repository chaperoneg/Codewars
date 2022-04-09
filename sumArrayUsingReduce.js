// Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

function sum(array) {
    // Use array.reduce() to calculate and return the
    // sum of the values in array.
    return array.reduce((acc, cur) => acc + cur)
  }
  