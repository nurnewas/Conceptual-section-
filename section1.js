console.log("hello world!");

var x = NaN; //NaN is considered a "number" in JavaScript because it represents an invalid result within the numeric type, even though it doesn’t mean an actual number.
//isNaN is a function that checks Nan
console.log(typeof x);


// check truthy or Falsy 
const y = false;
const z = "";
const a = 1;
const b = 0;
console.log(!! y, !! z, !! x, !! a, !! b);