/*
 OBJECTS IN JAVASCRIPT
 ==>  NON PRIMITIVE DATATYPES(REFRENCE)

 ==> Object is created with 
   

    We can imagine object as cabinet with signed files
    and every piece of data is stored in its file by the key
    its easy to find a file by its name or add/remove file

    ++++
    Literals and Properties

    const employee = //object /object name is (employee)
    {
        name = "Ramchandra" ,  // name is key and  the value of key is Ramchandra
        age = 33   // age is key and value is 33 
    }

    // Calling an object by two methods
    by
    console.log(office.days);  .methods
    console.log(office["office name"]);  by using[]

    // changing the value in object

    we use = to override the value

    office.contact = 5152345
 console.log(office.contact); 

*/

//  Object Literals

// Intialzation of object through object literals
// Declaration of Object
const office = {
   "office name": "Coding Hub",
    location: "Kathmandu",
    contact:5560007,
    email: "codinghub.com",
    days:["sunday",'wednesday'],




}
console.log(office.days);
console.log(office["office name"]);

office.contact = 5152345
console.log(office.contact);
//Object.freeze(office)
office.contact = 98435678

console.log(office);



office.greeting = function(){
    console.log("Tommorow is holiday" );
}


office.greetingTwo = function(){
    console.log(`Tommorow is holiday, ${this.email}`);
}
console.log(office.greeting); //undefined
console.log(office.greeting());
console.log(office.greetingTwo());