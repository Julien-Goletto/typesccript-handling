
// Les interfaces concernent exclusivement les objets
interface Rocket {
  reactors: number;
  vMax: number;
  takeOff: (action : string) => void;
}

// Alors que les types peuvent concerner tous les types
interface Rocket2 {
  reactors: number;
  vMax: number;
  takeOff: (action : string) => void;
}

interface Rocket {
  price: number;
  carburant: number;
}

// Rappeler l'interface permet de lui ajouter de nouvelles pptés 
const ariane : Rocket = {
  reactors: 2,
  vMax: 1200,
  price: 16,
  carburant: 4650,
  takeOff : (action) => console.log(action),
}

ariane.takeOff("Décoller");

// Implémentation Poo avec les classes
class RocketFactory implements Rocket {
  reactors: number;
  vMax: number;
  price: number;
  carburant: number;
  constructor(reactors: number, vMax: number, price: number, carburant: number){
    this.reactors = reactors;
    this.vMax = vMax;
    this.price = price;
    this.carburant = carburant;
  }
  takeOff = (action: string) => console.log(action);
}

const Falcon1 = new RocketFactory(4, 800, 300, 9000);
console.log(Falcon1);
Falcon1.takeOff("Ok let's gooooooooooo !");