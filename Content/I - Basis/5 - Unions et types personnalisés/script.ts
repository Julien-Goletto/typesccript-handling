// Unions
let code : string | number | boolean ; // Première union de typage
code = 5;
code = "six";
code = false;

let arr : (boolean | number)[]
arr = [true, false, 6];

const foo = (param: number | string) => console.log(param);
foo('test');

// Types personnalisés

type mixedNumStr = number | string;
const baz = (param: mixedNumStr) => console.log(param);
foo('test');``

type booleanOrObject = boolean | Object;
let test : booleanOrObject = true;
test = { a: "Toto" };

type element = {
  x: number;
  y: number;
  id: number|string;
  visible: boolean;
} // le séparateur pour les types est normalement un ;

const firstButton : element = {
  x: 10,
  y: 74,
  id: 'a298',
  visible: true,
}