// Find the last element of the given argument(s).

// Examples
// last([1, 2, 3, 4] ) // =>  4
// last("xyz")         // => "z"
// last(1, 2, 3, 4)    // =>  4

function last(...list){
    var last = arguments[arguments.length - 1];
        return last[last.length - 1] || last;
    }
    