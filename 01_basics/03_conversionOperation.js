 // 1 --- Type Conversion
/*
- Converting a value from one to another
- Number => String
- Number => Boolean

A. Implict Conversion (COERCION)


B. Explict Conversion (TYPE CASTING)



*/


// DATA TYPE 



// number => boolean number=> string  we want to check string boolean number we use typeof keywords✅

//  marks 33sss print=> NAN not anumber i.e. exactyl correct✅

/* null => 0 ✅

undefined => Nan ✅

true => 1 ✅
false => 0 ✅
"name" => NAN ✅
"33" => 33 ✅


*/


let marks = "33 ssss"
console.log(typeof marks);

let valueInNumber = Number(marks)
console.log( typeof valueInNumber);
console.log(valueInNumber);



let isSignIn = 1
let booleanIsSignIn = Boolean(isSignIn)
console.log(booleanIsSignIn);

/*
1 => true ✅
0 => false ✅
" " => false ✅
"abc" => true✅

*/


let someMarks = 14
let stringNumber = String (someMarks)

console.log(stringNumber);
console.log(typeof stringNumber);