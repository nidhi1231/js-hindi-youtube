// Primitive datatype
// 7 types:  String,Number,boolean,null,undefined,symbol,BigInt (primitive are call by value)

// Reference type(Non-primitive)
// Array,Objects,Functions
//js dynamic language h ya static?  homework

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 34521795244471139n

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name: "Nidhi",
    age: 22,
}
const myFunction = function(){
    console.log("Hello world");
    
}
//console.log(typeof bigNumber);
//console.log(typeof outsideTemp);
console.log(typeof myFunction);


