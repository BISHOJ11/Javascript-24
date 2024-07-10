
    


/* .is array 
Array.isArray()
Special method for that Array.isArray()
It returns true if the value  is an array
& false otherwise


==== Generally call returns in  'Boolean DataType'===

    

*/ 

//  ---->>  ALL THESE CASES FOLLOWING CALLS RETURN "TRUE"   

console.log(Array.isArray([]));
//---> true

console.log(Array.isArray([1]));
// ---> true

console.log(Array.isArray(new Array()));
// ---> true


console.log(Array.isArray(new Array("a","e","i","u")));
// ---> true

console.log(Array.isArray(new Array("5")));
// ---> true


//  ---->>  ALL THESE CASES FOLLOWING CALLS RETURN "False"   *  /

console.log(Array .isArray());
// ---> false

console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray(17));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray(new Uint8Array(32)));
console.log(Array.isArray("a","e","i","o","u"));

