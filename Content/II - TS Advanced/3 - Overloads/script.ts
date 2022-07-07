type NumberOrString = number | string;

// Overload - Typer tous les retours possibles d'une fonction

function combine(a: number, b: number): number;
function combine(a: string, b: number): string;
function combine(a: number, b: string): string;
function combine(a: string, b: string): string;

function combine (a: NumberOrString, b: NumberOrString) {
  if(typeof a === "string" || typeof b === "string"){
    return a.toString() + b.toString()
  }
  return a + b;
}

console.log(combine (1,2));
console.log(combine ("a",2));
console.log(combine ("a","b"));

// Même système, mais avec des arrow functions

type combine1 = {
  (a: number, b: number): number;
  (a: string, b: number): string;
  (a: number, b: string): string;
  (a: string, b: string): string;
}

const combine1 = (a: NumberOrString, b: NumberOrString) => {
  if(typeof a === "string" || typeof b === "string"){
    return a.toString() + b.toString()
  }
  return a + b;
}

console.log(combine1 (1,2));
console.log(combine1 ("a",2));
console.log(combine1 ("a","b"));