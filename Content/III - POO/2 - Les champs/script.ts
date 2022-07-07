// Point implémentation des classes : es6 = es2015
// Version raccourcie
class Book {
  private bookId = 88; // Accessible uniquement par les méthodes de classe
  readonly libraryName = "The Bookshelf";
  constructor( // Much much shorter version
    public title: string,
    public price: number,
    public dateOfPublishing: string,
    public author: string,
    public theme?: string[],
  ){};
  promo = () => this.price *= .5;
  printId = () => console.log('ID : ', this.bookId);
  printLibraryName = () => console.log('Library Name : ', this.libraryName);
}

const book1 = new Book("It", 15, "01/06/1976", "Stephen King", ["Thriller", "Horror"])
book1.promo();
book1.printId(); // On accède à la propriété via une méthode de classe directement.
book1.printLibraryName(); // On accède à la propriété readonly

let shelter : Book[] = [];
const addToShelter = (obj: Book, shelter: Book[]) => shelter = [...shelter, obj];
shelter = addToShelter(book1, shelter);