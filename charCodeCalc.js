// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x){
    let total1 =  x.split("").map(elem => elem.charCodeAt()).join("")
    let total2 = total1.split("").map(elem => elem === "7" ? 1:elem)
    return total1.split("").reduce((a,b)=> a + Number(b),0) - total2.reduce((a,b)=> a + Number(b),0)
  }

//   function calc(x){
//     return x
//       .split('')
//       .map(c => c.charCodeAt(0))
//       .join('')
//       .split('')
//       .map(Number)
//       .filter(x => x === 7)
//       .length * 6
//   }