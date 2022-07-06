"use strict";
// Tuple
const toto = [false, 20]; // néanmoins les méthodes de transformations d'array s'appliquent quand même...
// Enum
const roles = {
    JAVASCRIPT: 1,
    CSS: 2,
    REACT: 3,
};
console.log(roles.JAVASCRIPT);
var Roles;
(function (Roles) {
    Roles[Roles["JAVASCRIPT"] = 1] = "JAVASCRIPT";
    Roles[Roles["CSS"] = 2] = "CSS";
    Roles[Roles["REACT"] = 3] = "REACT";
})(Roles || (Roles = {}));
console.log(Roles);
