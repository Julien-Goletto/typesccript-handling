// Types de base
let str = "str";
let num = 5
let array = [];
let obj = {};
let toggle = true;

// Object specificity
let obj2 = { a: 5 };
// Types avancés
let anything; // Typage any
anything = 10;
anything = "10";
anything = true;

let randomNumber : number; // Typage strict d'un nombre

const conversion = (celsius : number) => celsius * 9/5; // Typage arg de fonction
console.log(conversion(10));