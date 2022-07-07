"use strict";
// Point implémentation des classes : es6 = es2015
// Version raccourcie
class Book {
    constructor(// Much much shorter version
    title, price, dateOfPublishing, author, theme) {
        this.title = title;
        this.price = price;
        this.dateOfPublishing = dateOfPublishing;
        this.author = author;
        this.theme = theme;
        this.bookId = 88; // Accessible uniquement par les méthodes de classe
        this.libraryName = "The Bookshelf";
        this.promo = () => this.price *= .5;
        this.printId = () => console.log('ID : ', this.bookId);
        this.printLibraryName = () => console.log('Library Name : ', this.libraryName);
    }
    ;
}
const book1 = new Book("It", 15, "01/06/1976", "Stephen King", ["Thriller", "Horror"]);
book1.promo();
book1.printId(); // On accède à la propriété via une méthode de classe directement.
book1.printLibraryName(); // On accède à la propriété readonly
let shelter = [];
const addToShelter = (obj, shelter) => shelter = [...shelter, obj];
shelter = addToShelter(book1, shelter);
