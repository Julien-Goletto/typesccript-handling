"use strict";
// Rappeler l'interface permet de lui ajouter de nouvelles pptés 
const ariane = {
    reactors: 2,
    vMax: 1200,
    price: 16,
    carburant: 4650,
    takeOff: (action) => console.log(action),
};
ariane.takeOff("Décoller");
// Implémentation Poo avec les classes
class RocketFactory {
    constructor(reactors, vMax, price, carburant) {
        this.takeOff = (action) => console.log(action);
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.carburant = carburant;
    }
}
const Falcon1 = new RocketFactory(4, 800, 300, 9000);
console.log(Falcon1);
Falcon1.takeOff("Ok let's gooooooooooo !");
