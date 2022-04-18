// You are developing an image hosting website.

// You have to create a function for generating random and unique image filenames.

// Create a function for generating a random 6 character string which will be used to access the photo URL.

// To make sure the name is not already in use, you are given access to an PhotoManager object.

// You can call it like so to make sure the name is unique

function generateName(){
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let answer = ""
    for(let i = 0; i < 6; i++){
     answer += characters.charAt(Math.floor(Math.random()* 26))   
  }
  return answer

}