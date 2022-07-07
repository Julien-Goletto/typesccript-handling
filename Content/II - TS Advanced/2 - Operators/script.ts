// L'opérator !

const container = document.querySelector(".container")!; // Rassure TS en lui indiquant que oui, il n'aura jamais de null
// Note : le type casting classique marche aussi très bien.
console.log(container.children);

// L'orperator ?

type Job = {
  title: string;
  description?: string;
  salary: number;
}

const user1 : Job = {
  title: "Dev Front-end",
  // description: "Développeur de sites internet", La prop est de fait facultative
  salary: 40000,
}

// Autre cas d'utilisation (propice pour les fetch API) :
console.log(user1?.description) // lis description si et seulement si user1 est défini

// Optionnal parameter

const message = (msg? : string) => {
  (msg) ? console.log(msg) : console.log("No message provided.");
}

message()

// Optionnal interface prop

interface House {
  room: number;
  price: number;
  garage?: number;
}

const house1 = {
  room: 2,
  price: 120000,
}

// ?? operator

const data = '';
const display = data || "Hello World"
const display2 = data ?? "Hello World" // permet d'afficher des falsy qui ne sont ni null ni undefined
console.log(display);
console.log(display2);

// never

const alertUser = (msg: string): never => { throw msg} ;
alertUser("Alerte, comportement dangereux !!");