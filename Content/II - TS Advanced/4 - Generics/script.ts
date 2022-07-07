// Generics

// Interface réutilisable

interface City<T> {
  name: string;
  pop: number;
  additionnalData: T;
}

// Le generic permet de passer des types différents
const London : City<Object> = {
  name: "London",
  pop: 10,
  additionnalData: { area: 700, metro: true},
}
const Paris : City<number[]> = {
  name: "London",
  pop: 10,
  additionnalData: [1,2,3,4],
}

// Generics for functions

const addRepairDate = <T>(obj: T) => {
  const lastRepair = new Date();
  return {...obj, lastRepair};
}

const auto1 = addRepairDate({ model: "Audi A1", km: 70000, price: 15000 });
console.log(auto1.model); // Ici demander .model de auto1 sans spécifier le T ne va pas fonctionner sans plus de précision
// avec le generic, T enregistre les propriétés de l'objet passé en argument.

// MAIS T est vraiment générique et peut accepter n'importe quoi !!

// On va spécifier que T est forcément de type objet :
const addRepairDate1 = <T extends Object>(obj: T) => {
  const lastRepair = new Date();
  return {...obj, lastRepair};
}
const auto2 = addRepairDate({ model: "Renault Mégane", km: 220000, price: 3000 });
console.log(auto2.km);
