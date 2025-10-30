const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","Flash","batman"]
//marvel_heros.push(dc_heros)  //1 push method
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const allHeros = marvel_heros.concat(dc_heros) // 2 concat method
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]  // spread operator
//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
console.log(Array.isArray("Nidhi"));
console.log(Array.from("Nidhi"));
console.log(Array.from({name:"Nidhi"}));// interesting  // give empty array

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4));

// pleasse read isArray ,from ,of