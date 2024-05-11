/*
STRINGS


// Declaring string why use const instead of let var
// We don't use var because either it 's function declared or function scoped
//let  introduce in Es6 it's a block scoped denoted by set of curly braces.
//const like let was also introduce ES6  stands for "CONSTANT" It's also block scopedkust like let
//Additional Charctertics There value cannot be reassigned once they are assigned variables are unchangeab
*/


// [1] DECLARING STRINGS IN JAVA SCRIPT =>

    // **** > const book = "November"
    //  **** > const pageCount = 245
    // [1.1] Concating the string in old way
    
      console.log(book + pageCount);  // ===> HIGHLY NOT RECOMMENDABLE
    // Output====>  November245

    // [1.2] Concating the string modern way Most Recommended Way...

    console.log(`The writer of ${book} included lots of page ${pageCount}`);    // ===> HIGHLY  RECOMMENDABLE
    // OUTPUT ===> The writer of November includes lots of page 245



// [2] Declaring { STRING } with { new } Keyword ..
  //  { new } String with the new  is called CONSTRUCTOR.

  const authorName = new String('Coolen')

  //[2.1] Trying New string methods 

   console.log(authorName[4]);
 // KEY VALUE
  // OUTPUT ===>  e if 5 n

 console.log(authorName.__proto__);   // . to add methods in string as same in css . means class
 // PROTOTYPE
// O/P ===> {}

  console.log(authorName.length);
 // LENGTH
  // O/P ===> 6

   console.log(authorName.toUpperCase());
  //CHANGE INTO UPPERCASE
  // O/P ===> COOLEN

  console.log(authorName.charAt(3));
  // CHARCTER AT
  // O/P ===> l

 console.log(authorName.indexOf(''));
// INDEX OF
// O/P ===> 0


/*
[new string]
*/

  const newString = authorName.substring(0,5)
  console.log(newString);
// SUBSTRING
// O/P ===> COOLE


 const anotherString = authorName.slice(-3,5)
 console.log(anotherString);
// SLICE
// O/P ===> le




//
//[new stringOne]
 const newStringOne = "  hover  "
 console.log(newStringOne.trim());
//TRIM  EXTRA SPACES
// 0/P ===> hover

const url = "https://github.com/BISHOJ%20basnet11"

console.log (url.replace('%20', '-'))
// REPLACE
// O/P ===> "https://github.com/BISHOJ-basnet11"

 console.log (url.includes('D'));
 // INCLUDE
 // OP ===> FALSE

 console.log(authorName.split('_'));
 // SPLIT
 // O/P ===> ["Coolen"]

