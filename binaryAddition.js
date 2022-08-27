// Task
// Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

function add(a, b)
{   if (b === 0){
  return a
}else{
  let sum = a ^ b; // add without carrying
    let carry = (a & b) << 1; // carry, but don’t add
    return add(sum, carry); // recurse
}
    
}