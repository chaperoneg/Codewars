// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3

function strCount(obj){
    // Your code here
      let count = 0
     for(let key in obj){
       if(typeof obj[key] === "string") count+=1
       if(typeof obj[key] === "object") count += strCount(obj[key])
     }
      return count
    }

    // const strCount = obj =>
    // typeof obj !== `string` ? Object.values(obj || {}).reduce((pre, val) => pre + strCount(val), 0) : 1;