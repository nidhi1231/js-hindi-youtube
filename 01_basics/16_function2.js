// function calculatePrice(num1){ // rest operator
//     return num1 // return 200
// }
// function calculatePrice(...num1){ // rest operator
//     return num1 // return [ 200, 300, 400 ]
// }
function calculatePrice(val1, val2, ...num1){ // rest operator
    return num1
}
// console.log(calculatePrice(200,300,400,500,2000));

const user = {  // object
    username: "Hitesh",
    prices: 199
}
function handleObject(anyobject){  // object pass in function
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({   // object pass in function
    username : "sam",
    price: 399
})

const myNewArray =[200,400,500,600] 
function retunSecondValue(getArray){ // array pass in function
    return getArray[1]
}
console.log(retunSecondValue(myNewArray));
