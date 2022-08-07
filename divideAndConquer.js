// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
    let num =  x.filter(elem => Number.isInteger(elem)).reduce((acc,c)=> acc +c)
    let str = x.filter(elem => !Number.isInteger(elem)).reduce((acc,c)=> +acc + +c)
    return num - str
  }