"use strict";
// Point implémentation des classes : es6 = es2015
// Version de base
class Book {
    constructor(t, p, dop, a, th) {
        this.promo = () => this.price *= .5;
        this.title = t;
        this.price = p;
        this.dateOfPublishing = dop;
        this.author = a;
        this.theme = th;
    }
    ;
}
const book1 = new Book("It", 15, "01/06/1976", "Stephen King", ["Thriller", "Horror"]);
console.log(book1);
book1.promo();
console.log(book1);
let shelter = [];
const addToShelter = (obj, shelter) => shelter = [...shelter, obj];
shelter = addToShelter(book1, shelter);
console.log(shelter);
