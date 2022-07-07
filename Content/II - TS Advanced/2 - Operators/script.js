"use strict";
// L'opérator !
const container = document.querySelector(".container"); // Rassure TS en lui indiquant que oui, il n'aura jamais de null
// Note : le type casting classique marche aussi très bien.
console.log(container.children);
const user1 = {
    title: "Dev Front-end",
    // description: "Développeur de sites internet", La prop est de fait facultative
    salary: 40000,
};
// Autre cas d'utilisation (propice pour les fetch API) :
console.log(user1 === null || user1 === void 0 ? void 0 : user1.description); // lis description si et seulement si user1 est défini
// Optionnal parameter
const message = (msg) => {
    (msg) ? console.log(msg) : console.log("No message provided.");
};
message();
const house1 = {
    room: 2,
    price: 120000,
};
// ?? operator
const data = '';
const display = data || "Hello World";
const display2 = data !== null && data !== void 0 ? data : "Hello World"; // permet d'afficher des falsy qui ne sont ni null ni undefined
console.log(display);
console.log(display2);
// never
const alertUser = (msg) => { throw msg; };
alertUser("Alerte, comportement dangereux !!");
