// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
function cubeOdd(arr) {

    // insert code here >.<
      arr.some(elem => typeof elem !== "number") ? undefined : arr.map(elem => elem * elem * elem).filter(elem => elem % 2 !== 0).reduce((acc, cur) => acc + cur,0)
      
    
    
    }