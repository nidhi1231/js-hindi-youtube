// Imediately Invoked Function Expression(IIFE)
//gloabl scope se problem hoti h , global declaration problem ko  remove krne k liye IIFE use hota h
// function chai(){
//     console.log(`DB Connected`);
    
// }
// chai()


(function chai(){
    console.log(`DB Connected`);
    
})();

((name) => {
    console.log(`DB Connected 2 ${name}`);
    
})('hitesh')
