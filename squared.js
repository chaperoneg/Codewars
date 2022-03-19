function squareDigits(num){

    num = String(num)
    num = num.split("")
    let nums = num.map(number =>{return number**2})
    nums = String(nums.join(""))
    return nums;
  }