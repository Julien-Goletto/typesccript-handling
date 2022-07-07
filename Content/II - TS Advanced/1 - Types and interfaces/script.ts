// Intersection
type Fish = {
  fin: number;
  element: "water";
  gills: true;
}

type Shark = {
  weight: number;
  length: number;
}

// On crée une intersection entre les types
type HammerheadShark = Fish & Shark & { color: "brown"};

const brucie : HammerheadShark = {
  fin: 3,
  element: "water",
  gills: true,
  weight: 600,
  length: 3,
  color: "brown",
}

let obj: { prop1: "a" } & { prop2: "b" };

// Lier des interfaces

interface Flower {
  pollen: true;
  type: "vegetal";
}

interface Rose extends Flower {
  color: string;
  thorn: boolean;
}

const redRose : Rose = {
  pollen: true,
  type: "vegetal",
  color: "red",
  thorn: true,
}

// Union discriminante

type Japan = {
  lang: "JP";
  food: string[];
}

type Italy = {
  lang: "IT";
  food: string[];
}

type Country = Japan | Italy;

const automaticResponse = (country : Country) => (country.lang === "JP") ? console.log("Conichiwa !") : console.log("Buongiorno !");

const japanese1 : Country = {
  lang: "JP",
  food: ["ramen", "sushis"],
}

automaticResponse(japanese1);

// Unknow number of props

interface Group {
  [name: string] : object;
}

const spainTrip : Group = {
  john: {id: 1},
  tom: {id: 2},
  julia: {id: 3},
}