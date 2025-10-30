// object ko declare krne ke 2 tarike h
//1. literal 2.constructor 
// singleton = constructor se bnate h to 1sngleton bnta h ye apne tarah ka ek hi object hota h
//literal se object bnane pr singleton nhi bnta
//constructor se object bnane pr always singleton bnta h

const mySym = Symbol("key1")//  declare symbol

// object literals

const JsUser = {
    name : "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.emails = "hiteshchatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello user,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



