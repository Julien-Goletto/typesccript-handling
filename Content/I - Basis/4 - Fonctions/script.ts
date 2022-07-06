// par défaut, le stric mode nécessite un typage de toutes les variables / arguments
const multiply = (num1 : number, num2 = 10, action? : string) => {
  if (action) console.log(action);
  return num1 * num2;
}
// return implicite d'un number
// Si valeur par défaut, type inféré
// ? paramètre facultatif
console.log(multiply(6, 64, "Delete"));

// Type void si pas de return
let foo : Function; //Les types de classes sont accessibles aussi
foo = () => {}

// Function signature
let baz: (a: number, b: number) => number;
baz = (a, b) => a + b;

// typage de callback
function greetings(fn: (a: string) => void){
  fn("Hello World !");
}

function printToConsole(msg: string) {
  console.log(msg);
}

console.log(greetings(printToConsole));