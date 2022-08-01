// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

// If you like this Kata, please try:

function solve(arr) {
    return arr.map(function(input) {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let arr = input.toLowerCase().split('');
        let sum = 0;
        // You can iterate an array with a forEach AND keep the index:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        arr.forEach(function(val, i) {
            // Now the check is much simpler.  See if the character in index I
            // matches the character in the alphabet at index i
            if(val === alphabet[i])
                sum++
        });
        return sum;
    });
}