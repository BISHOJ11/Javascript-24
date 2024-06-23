// ARRAY

/*
[CHAPTER 11 ARRAY]
Array is  object 
Enables us storing a collection of multiple items under single variable name  
*/

//const myArr = [0,1,2,4,5] // Declaring array and indexing them
 //console.log(myArr[4]);

 // O/P ===>  5

// declration of array

// const myMarvels = ["ironman","spiderman","blackpanther"]




const myArr = new Array(4,3,2,1)



// array methods

// Push methods


myArr.push(6)
myArr.push(9)
console.log(myArr);
// O/P ===> [4,3,2,1,6,9]
// push  it appends vor add value


// Pop methods

// myArr.pop()
console.log(myArr);
// O/P ===> [4,3,2,1,6]
// Pops removes last value 


// Unshift

// myArr.unshift(0)
console.log(myArr);

//O/p ===>  [0,4,3,2,1,6]
//Unshift  add 0 value to front 

// Shift 

// myArr.shift()
console.log(myArr);
//O/p ===>  [3,2,1]
// Shift methods first two values 0 & 4

// question methods in array

console.log(myArr.includes(5));
//O/P ==> FASLSE [boolean]
// it checks the give value is there or not and answer it in true and false statement

// index of Method
console.log(myArr.indexOf(5));
// O/P ===> -1 novalue in 

//joIN

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
//O/P ===> [4,3,2,1] STRING
// joins two array from of string


// slice  --- splice
//Sorts an array in place.
// This method mutates the array and returns a reference to the same array.

console.log("A" , myArr);

const myn1 = myArr.slice(1,4)
console.log(myn1);
console.log("b" , myArr);

// O/P ===>  A [4,3,2,1]  [3,2,1] b [4,3,2,1]

//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

const myn2 = myArr.splice(1,4)
console.log(myn2);
console.log("c" , myArr);
// O/P ]
/*
A [ 4, 3, 2, 1 ]
[ 3, 2, 1 ]
b [ 4, 3, 2, 1 ]
[ 3, 2, 1 ]
c [ 4 ]
*/
