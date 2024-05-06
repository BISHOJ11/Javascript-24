/*
PRIMITIVE DATA TYPES

7 DATATYPES
--STRING
-- NUMBER
-- BOOLEAN
-- NULL
-- UNDEFINED
-- SYMBOL
-- BigInt


REFRENCE  (NON PRIMITIVE)

-- ARRAY
-- OBJECTS
-- FUNCTIONS


*/


// EXAMPLES PRIMITIVE

const point = 200;
const scoreValue = 10.4;
const isLoggedIn = true;
const surroundingTemp = null;
let userId;

const id = Symbol(9843);
const anotherId = Symbol(9843);

console.log(id === anotherId);
const bigNumber = 988888888888888888888888888n; //big int



// EXAMPLES  NON PRIMITIVE


//array

const cars = ["suzuki", "byd", "tata"];

// objects
let myProfile = {
    name: "Bishoj",
    dob: 1996,
    job:"developer",

    
}
// function
const myfunction = function (){
    alert("Hey There ");

}