/*
STACK MEMORY
PRIMITIVE DATA TYPES ONLY USE STACK MEMORY 
 it takes COPIED VALUE


--STRING
-- NUMBER
-- BOOLEAN
-- NULL
-- UNDEFINED
-- SYMBOL
-- BigInt  

HEAP MEMORY


REFRENCE  (NON PRIMITIVE) DATA TYPES ONLY USE HEAP MEMORY  
 It takes REFRENCE VALUE

-- ARRAY
-- OBJECTS
-- FUNCTIONS'

*/

// Stack memory

let myProfile =  "bishojbasnet11"
anotherProfile = "BISHOJ"
console.log(myProfile);
console.log(anotherProfile);

let account = {
    profile: "basnetbishoj@outlook.com" ,
    id: "Basnet Bishoj",


}
let accountOne = account
accountOne.profile = "bishojbasnet.com.np"

console.log(account.profile);
console.log(accountOne.profile);