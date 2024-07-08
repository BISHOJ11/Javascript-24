// Summary of Array


//  Summary of Array

/*
what it does is it help us to keep our data in orderd
collection(manage conditions)

*** Declaration of array
We can declare our array in two ways

1st way --> let arr = new Array ();
2nd way --> let arr =[];
***
eg:-- let cars = ["suzuki", "mahindra", "tata"];

***
Elements of Array  are suzuki mahindra tata

and In array they are numbered starting with zero

eg--- let cars = ["suzuki", "mahindra", "tata"];
---> Numbering in Array
(suzuki[0])
(mahindra[1])
(tata[2])

---> We can replace an element
cars [2] = "mazda" --> let cars = ["suzuki", "mahindra", "mazda"]

---> We can add on  new arry element
cars [3] = "kia" --> let cars = ["suzuki", "mahindra", "mazda", "kia"]

--> We can count total count of element in array (length)
let cars = ["suzuki", "mahindra", "mazda", "kia"]
console.log(cars.length)
--> 4

An array can store element of any type

---> for eg
** Mix of values
let arr = ['Mango', {name: 'Joe}, true, function() {alert ('Heyy')}];

Index of Array
console.log(arr[3]); --> function

*** Trailing Comma
Array is just like an Object May end with a Comma

let cars = {
    [
    "suzuki",
    "mahindra",
    "kia",
    ];
}


Negative index of array 
it always steps back  from the end of array

----- Methods of Array (Pop /Push/ Shift/ Unshift)

--> Pop
** Takes an element from end
let cars = ["suzuki", "mahindra", "tata", "kia" ]
console.log(cars.pop());
**Removes "kia" from element
--> suzuki,mahindra, tata

--> Push
** Adds an element to the end
let cars = ["suzuki", "mahindra", "tata", "kia" ]
cars.push("Hyundai")
suzuki,mahindra, tata,kia,Hyundai

--> Shift
** Gets element  from the begining, advancing the queue so that 2nd element becomes the 1st

let cars = ["suzuki", "mahindra", "tata", "kia" ]
console.log(cars.shift());
--> mahindra, tata,kia

--> Unshift
** Adds the elements to the begining of the array
let cars  ["mahindra", "tata", "kia" ]
cars.unshift('Thar')
--> Thar,mahindra, tata,kia

** Methods push and unshift can add multiple elements at once

let cars =["tata"]
cars.push("mahindra","suzuki")
cars.unshift("Hyundai","Thar")
console.log(cars);
--> Hyundai,Thar,tata,mahindra,suzuki

** Perfomances
--> Methods push/pop  run fast while shift/unshift are slow
++ Pop method doesnot need to move any thing because other elements
keep their indexes. so it is blazingly fast.


** Loops in Array

One of the oldest way to cycle array items is the for loop of indexes

---For Loop

--> let arr =["suzuki", "mahindra", "tata"]
--- for (let i=0; i < arr.length; i++)
    console.log(arr[i]);

---> Another form of loop 
--- for ---of  loop

let arr =["suzuki", "mahindra", "tata"]
-- for (let car of cars) 
    {
        console.log (car)
    }

    for of does't give access to the number of the current element
    just its value but in the most cases thats enough 


    for---in  loop
    let arr =["suzuki", "mahindra", "tata"]
-- for (let key in arr) 
    {
        console.log (arr [key])
    }


    **** Summary of Array

    -- Array is special kind of object  suited to string & managing ordered data items
    -- Declaration let arr = []; [] (usal) rarely used new  Array() let arr = new Array(item1, item2...);
    -- new Array creates an array with the  given length but without elements
    -- length property  is the array length  to be precise 
    --  getting the elements
    -- By indexes  like arr[0]
    -- Also we can use  at (i)  method that allows neagtive indexes
    -- For negative value of i it steps back from the end  of the array  if i >= 0 it works as arr[i]
    -- We can use array as a deque  with the following operations
    ** push -- add  items to the end
    ** pop -- removes the element from the end and returns it
    ** shift -- removes the element from the begining and returns it
    ** unshift-- add items to the begining
    -- Loop over the element of the array
    ** for (let i=0; i <arr. length; i++) -- works faster old browser compatiable
    ** for (let item of arr)-- the modern syntax for items only
    ** for (let i in arr) -- never use
















*/
