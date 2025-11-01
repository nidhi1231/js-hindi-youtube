function one(){ // nested scope
    const username = "Hitesh"
    
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);  website not defined
    two()
}
one()
if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);

// ################### Interesting ##########################

function addone(num){
    return num + 1
} 
console.log(addone(5));

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));