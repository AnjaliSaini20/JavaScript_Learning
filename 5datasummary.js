//Primitive(call by value)

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

// JS is a dynamically types language as we need not to specify the data type of the variable while declaring 

const scrore = Symbol("123")
const Firstscrore = Symbol("123")

// console.log(score === Firstscrore); //false

const bigNumber = 5464646646464884484n

const strr = null
console.log(typeof strr); // object




//Non-Primitive (Reference)
// Array , Objects , Functions 
const heros = ["shaktiman" , "naagraj", "doga"];
let myObj = { // key - value pair 
    name: "Anjali" ,
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);
console.log(typeof myObj); // object
console.log(typeof myFunction); // function
console.log(typeof heros); // Object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memeories - 2 Types 

// Stack (Primitive - provide a copy of it) , Heap (Non-primitive - same referenve milta h )
 
let name1 = "Anjali"
let name2 = name1
name2 = "Aditi"

console.log(name1); //Anjali
console.log(name2); // Aditi

let user1 = {
    email: "user@example.com",
    id: "qwer"
}

let user2 = user1

user2.email = "save@example.com"
console.log(user1);
console.log(user2);




