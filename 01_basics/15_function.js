
function sayMyName(){  // declare function
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");

}

//sayMyName()// call function

// function addTwoNumbers(number1,number2){ // function with parameter
//     console.log(number1+number2);
    
// }
function addTwoNumbers(number1,number2){ // function with parameter
   // let result = number1 +number2
    //console.log("hitesh");// ye print krta h
   // return result

    return number1 +number2
    //console.log("hitesh"); // unrecable code after return ye print nhi hoga
    
}
const result = addTwoNumbers(3,5) // function call by arguments
// console.log("result: ",result);

function loginUserMessage(username){
    if(username === undefined){
       console.log("Please enter a username");
       return 
    }
    return `${username} just logged in`
}

function loginUserMessage1(username){
    if(!username){
       console.log("Please enter a username");
       return 
    }
    return `${username} just logged in`
}
function loginUserMessage2(username = "sam"){  // default pass krna ho to
    if(!username){
       console.log("Please enter a username");
       return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Hitesh"));
console.log(loginUserMessage2("Hitesh"));
