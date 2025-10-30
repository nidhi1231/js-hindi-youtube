//array
// const  myArr = [0,1,2,3,4,5,true,"Hitesh"]
const myArr = [0,1,2,3,4,5]
const myheros = ["Shaktiman","NagRaj","Batman","Spiderman"]
// console.log(myArr[1]);
//Array methods
// myArr.push(6)/// ye method values ko add krta h
// myArr.push(7)
// console.log(myArr);
// myArr.pop() // ye method last element ko remove kr deta h
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// console.log(myArr);
const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log( typeof newArr);

// slice ,splice
console.log("A",myArr);

const myArr1 = myArr.slice(1,3)
console.log(myArr1);
console.log("B",myArr); // original array as it is rhta h

const myArr2 = myArr.splice(1,3)
console.log("C",myArr);// original array ko msnipulate krta h
console.log(myArr2);





