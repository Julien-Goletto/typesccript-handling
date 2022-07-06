"use strict";
let fruits = ['fraise', 'pommes'];
// fruits.push(4);
fruits.push('cerise');
console.log(fruits);
const mixedArray = [1, "string", true, [1, 2, 3]]; // tableau au type inféré "libre"
let nums; // n'est pas une initialisation
nums = [1, 2, 5, 9];
let random;
// Objects
const car = {
    name: 'Audi',
    model: 'A1',
    km: 70000,
};
// Les types sont inférés à la déclaration
let profile;
profile = {
    name: 'John',
    age: 85,
};
let user = {
    name: 'Joe',
    age: 45,
    favFood: ['fries'],
    data: 50
};
// pas très élégant, à reprendre avec les décalrations de types / interfaces
let obj;
obj = { name: "Toto" };
