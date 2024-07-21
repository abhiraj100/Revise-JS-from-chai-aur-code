let myName = "abhiraj"
console.log(myName.length);

// let myChannel = "chai   "

// let myName2 = "abhiraj    "
// // console.log(myName2.trim().length);

// we want method not property
// console.log(myName2.trueLength());


let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


// factory function -> create (by default function which is used to create )

Object.prototype.abhiraj = function() {
    console.log(`abhiraj is present in all objects`);
}


Array.prototype.heyAbhiraj = function(){
    console.log(`Abhiraj says hello`);
}



heroPower.abhiraj();

console.log("----x----x----x----");

myHeros.abhiraj();

console.log("----x----x----x----");

myHeros.heyAbhiraj();

console.log("----x----x----x----");

// heroPower.heyAbhiraj();  // TypeError: heroPower.heyAbhiraj is not a function


