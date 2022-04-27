// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Seni

function openOrSenior(data){
    // ...
    let output = []
    data.forEach(elem => {
      elem[0] >= 55 && elem[1] > 7 ? output.push("Senior"): output.push("Open")
    })
    return output
  }

//   function openOrSenior(data){
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
//   }