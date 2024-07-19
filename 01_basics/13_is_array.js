
    


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



/*
Array.from
It genrally converts  other datatypes into array
*/

console.log(Array.from("Github"));
//===> [G],[i],[t],[h],[u],[b]

console.log(Array.from({repo: "javascript"}));
//===> []


    /*
    Array.of
    It returns a new array from set of elements
    */

    const dell = 25000
    const poco = 16000
    const redmi = 10000

    console.log(Array.of(dell,poco,redmi));
    //==> [25000,16000,10000]
