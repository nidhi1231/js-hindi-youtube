
//var c = 300
let a = 200 // global scope
{} // this is scope  jb curly braces function, if statement ya loop ke sath h = scope

if(true){ // local scope 
   let a = 10
  const b = 20
  console.log("Inner: ",a);
  
   //var c = 30 
}
console.log(a); // print 200
//console.log(b);
// console.log(c); // print 30 krta h
let array =["Reena","Meena","Tina"]
for(let i =0; i<array.length; i++){
    const element =  array[i]
    console.log("element:",element);
    
}
console.log(array[1]);
