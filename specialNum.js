// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not .

function specialNumber(n){
    //your code here
    n = [...n.toString()]
    return n.every((elem) => Number(elem) <= 5) ? "Special!!" :"NOT!!"
  }