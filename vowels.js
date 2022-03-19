function getCount(str) {
    var vowelsCount = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    // enter your majic here
    str = str.split("")
    for(let i=0; i< str.length;i++){
      vowels.includes(str[i])?vowelsCount++:vowelsCount+=0
    }
    return vowelsCount;
  }