// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

function disariumNumber(n){
    //your code here
    return [...n.toString()].reduce((acc,c, i)=> acc + Math.pow(Number(c),(i+1)),0) == n? "Disarium !!":"Not !!"
  }
  