function descendingOrder(n){
    //...
    n = String(n).split("")
    return Number(n.sort((a,b) => b - a).join(""))
    
  }