// this function
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){  
        // this current context ko return krta h
        console.log(`${this.username } , welcome to website`);  
        console.log(this);
        
    }

}
// user.welcomeMessage()// current contex(value)
// user.username = "sam" // change current context
// user.welcomeMessage()
// console.log(this); // {} empty 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);// undefined
    
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai()
// arrow function
const chai = () => {
    let username = "hitesh"
    //console.log(this);
    
}
chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) =>  num1 + num2 //implicit return
//const addTwo = (num1,num2) => ( num1 + num2 ) //in react

const addTwo = (num1,num2) => ({username: "hitesh"} )//object  return 
console.log(addTwo(3,4));
