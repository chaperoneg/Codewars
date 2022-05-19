// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    let arr = array.slice(1) 
    if(arr.every((elem, i)=> array[i] <= elem)){
      return "yes, ascending"
    }
    else if(arr.every((elem, i)=> array[i] >= elem)){
      return "yes, descending"
    }else {
      return "no"
    }
  }

//   https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

// function isSortedAndHow(arr) {
//     return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
//            arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
//   }

// const isSortedAndHow = a => {
//     const s = a.join``;
//     return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
//            s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
//   }