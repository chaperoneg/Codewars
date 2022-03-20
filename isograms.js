function isIsogram(str){
    //...
    return str.toLowerCase().split("").every((c, i) => str.toLowerCase().indexOf(c) == i)
  }