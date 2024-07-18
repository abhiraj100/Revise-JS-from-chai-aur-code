const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

console.log(marvel_heros);
console.log(dc_heros);

// concat
const allHeros = marvel_heros.concat(dc_heros)  // it return a new array
console.log(allHeros);

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros)


const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]

// flat
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// Array.isArray  && Array.from 
console.log(Array.isArray("abhiraj"))
console.log(Array.from("abhiraj"))
console.log(Array.from({name: "abhiraj"}))  // interesting case

let score1 = 100
let score2 = 200
let score3 = 300

// Array.of
console.log(Array.of(score1, score2, score3));