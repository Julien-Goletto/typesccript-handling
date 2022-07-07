"use strict";
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(combine(1, 2));
console.log(combine("a", 2));
console.log(combine("a", "b"));
const combine1 = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
console.log(combine1(1, 2));
console.log(combine1("a", 2));
console.log(combine1("a", "b"));
