// Gauß needs help! (Sums of a lot of numbers).
// 1634084% of 1,6476,502 of 12,475ingitaly5 Issues Reported
//  JavaScript
// Node v14.x
// VIM
// EMACS
// Instructions
// Output
// Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

// Here's, an example:

// f(n=100) // returns 5050 
// It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#, 0 for COBOL).

// Note: the goal of this kata is to invite you to think about some 'basic' mathematic formula and how you can do performance optimization on your code. 

// Advanced - experienced users should try to solve it in one line, without loops, or optimizing the code as much as they can.

// Credits: this kata was inspired by the farzher's kata 'Sum of large ints' . In fact, it can be seen as a sort of prep kata for that one.

function f(n){
    //insert your code here.... and go crazy!
      
      return Number.isInteger(n) && n > 0 ? n * (n + 1)/2  : false
    };