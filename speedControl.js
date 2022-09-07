// Speed Control
// 3337285% of 1,7522,431 of 12,431g9641 Issue Reported
//  JavaScript
// Node v10.x
// VIM
// EMACS
// Instructions
// Output
// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25

const gps = (s, x) => {

    if (x.length<=1) {
      return 0;
    }
    
    let output = [];
    for (let i = 0; i < x.length-1; i++) { 
      output.push((x[i+1]-x[i])*3600/s);
    }
    
    return Math.max(...output);
  }