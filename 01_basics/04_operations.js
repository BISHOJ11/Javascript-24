/* 
WHY STRING TO NUMBER CONVERSION IS CONFUSING ?
*/

let str1 = "hy"
let str2 = " hy"
let str3 = str1 +  str2

console.log(str3);

/*
=> hy hy
*/

console.log("2" + 3);

// //  23

console.log(2 + "3");
// // 23

console.log("2" + 3 +4);
// // 234

console.log(2+ 3 + "4");
// // 54

/*
string=> first string
number => first number
*/

console.log( true);
console.log( +true);
// console.log( true +);
console.log(+ "");

// true ,1, error, 0

// prefix

//let run = 100 
//  run++;
// console.log(run);
// 101

//postfix
let run = 100 
++run
console.log(run);

// 101