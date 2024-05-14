/*
CHAPTER 10 [DATE AND TIME IN JAVASCRIPT]

*/

// ====>>> DATE //

// 10.1 [LIVE DATE ]

let myDate = new Date()
// console.log(myDate);
 // O/P ===> 2024-05-13T16:56:26757Z [normal]

 console.log(myDate.toString());

 // O/P ===> Mon May 13 2024 22:43:30 GMT+0545 (NEPAL TIME)[toString]

//------

console.log(myDate.toDateString());
// O/P ===> MON MAY 13 2024 [ .toDateString]

//----

console.log(myDate.toISOString());
// O/P ===> 2024-05-13T17:03:47.633Z [.toISOString]

//----
console.log(myDate.toJSON());
//O/P ===> 2024-05-13T17:05:56.323Z[toJSON]

//----
console.log(myDate.toLocaleDateString());
// O/P ===> 5/13/2024 [toLocale DateString]


//----
console.log(myDate.toLocaleString());
// O/p ===> 5/13/2024,10:54:04 [toLocaleString]

//----

console.log(typeof myDate);
// O/P ==> [OBJECT]

// =====> Created Date

 let mycreatedDate = new Date(2024, 4, 13) // mnth starts from 0

console.log(myCreatedDate.toDateString());
// O/P ==> Mon May 13 2024

//----

let myCreateddate = new Date(2024, 4, 13,5,3) 
console.log(myCreateddate.toLocaleDateString());
// O/P ===> 5/13/2024

// ----

let myCreatedDate = new Date("2024-05-14")
console.log(myCreatedDate.toLocaleDateString());
// O/P ===> 5/13/2024


// ----

let myTimeStamp = Date.now() // Usally used for quiz poll in Javascript
console.log(myTimeStamp);
// O|P ===> 1715703138989 (milisecond)

//---

console.log(Math.floor(Date.now()/1000));
// O/p 1715703477 [Converting into second but removing decimal using math.floor formula]


// ---

let newDate = new Date()

console.log(newDate);
// ----
console.log(newDate.getDate());

// O/p ===> Date -14
//---

console.log(newDate.getDay());
// O/P ===> Day  2
