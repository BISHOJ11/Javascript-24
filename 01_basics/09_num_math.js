/*
===== [CHAPTER 9 NUMBERS IN JAVASCRIPT]
*/

const runs = 200
console.log(runs);

// O/P ====> 200


const account = new Number(1000);
console.log(account);


// -------

console.log(account.toString().length);
// O/P===> 1000 & Length
// -------
console.log(account.toFixed(2));
// Generally Fixed number is DECIMAL number
// O/P ===> 1000.00

// -----

const number = 25.6666;
console.log(number.toPrecision(4));

//----

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));
// O/P ===> 1,000,000 & en-IN [INDIAN STANDARDS] ==> 10,00,000

/* 
===== CHAPTER 10 [MATHS IN JAVASCRIPT]
*/

// -----

console.log(Math);
// O/P ===> Object [Math] {}

//----

console.log(Math.abs(-10));
// [ABS absolute value] :- positive value remains positive but neagtive changes into positive
// O/P ===> 5 -> 5  -10 -> 10

// ---

console.log(Math.round(3.5));

// [ROUND OFF THE VALUES]
// O/P ---->  4

// ----

console.log(Math.ceil(3.1));
//[CEILING [TOP VALUE]]
// O/P ===> 3{guess} ❌ 4 ✅

//----

console.log(Math.min(4, 5, 2, 1, 3));
//[ MINIMUM VALUE ]
//O/P ---> 1

//----

//
console.log(Math.max(9, 3, 5, 1, 2, 0));
// [MAXIMUM VALUE]
// O/P ===> 9

//-----

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//[** RANDOM ]