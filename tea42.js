// Tea for two!

// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

function tea42(input) {
    // your code
    return input.toString().split("").map(elem => elem == "2"? "t" : elem).join("")
  };