// Point implémentation des classes : es6 = es2015
// Version de base
class Book {
  title: string;
  price: number;
  dateOfPublishing: string;
  author: string;
  theme?: string[];
  constructor(t: string, p: number, dop: string, a: string, th:string[]){
    this.title = t;
    this.price = p;
    this.dateOfPublishing = dop;
    this.author = a;
    this.theme = th;
  };
  promo = () => this.price *= .5;
}

const book1 = new Book("It", 15, "01/06/1976", "Stephen King", ["Thriller", "Horror"])
console.log(book1);
book1.promo();
console.log(book1);

let shelter : Book[] = [];
const addToShelter = (obj: Book, shelter: Book[]) => shelter = [...shelter, obj];
shelter = addToShelter(book1, shelter);
console.log(shelter);