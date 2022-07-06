// Tuple

type tuple = [boolean, number];
const toto : tuple = [false, 20]; // néanmoins les méthodes de transformations d'array s'appliquent quand même...

// Enum

const roles = {
  JAVASCRIPT: 1,
  CSS: 2,
  REACT: 3,
}

console.log(roles.JAVASCRIPT);

enum Roles {JAVASCRIPT = 1, CSS, REACT}

console.log(Roles)