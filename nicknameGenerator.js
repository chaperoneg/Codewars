// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified


function nicknameGenerator(name){
    //code goes here
    let vowels  = ["a","e","o","i","u"]
    if(name.length < 4) return "Error: Name too short"
    if(!vowels.includes(name[2])){
      return name.substring(0,3)
    }else if (vowels.includes(name[2])){
      return name.substring(0,4)
    }
  }