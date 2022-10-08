// Complete the function that calculates how many missions Mormons need to embark on, in order to reach their target. While each correct solution will pass, for more fun try to make a recursive function.

// All inputs are valid positive integers.

// Examples
// starting_number = 10, reach = 3, target = 9  -->  0
// # No missions needed because the number of followers already exceeds target

// starting_number = 40, reach = 2, target = 120  -->  1
// # Every mormon converts 2 people, so after 1 mission there are 40 + 80 = 120 mormons

// starting_number = 20_000, reach = 2, target = 7_000_000_000  -->  12
// # Mormons dominate the world after only 12 missions!

function Mormons(startingNumber, reach, target,n=0) {
    //let the mission begin!
    if (startingNumber >= target) {
      return n
    }else{
      return Mormons(startingNumber + (startingNumber * reach), reach, target,n+1)
    }
  }