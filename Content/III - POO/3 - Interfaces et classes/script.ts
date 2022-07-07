interface Country {
  name: string;
  pop: number;
  lang: string[];
}

class Norway implements Country {
  constructor(public name: string, public pop: number, public lang: string[], capital: string) {}
}

const norwayData = new Norway("Norway", 9, ["Norvegian", "English"], "Oslo");

// La même interface peut être utilisée pour plein de classes différentes
class France implements Country {
  constructor(public name: string, public pop: number, public lang: string[]) {}
}
const franceData = new France("France", 70, [
  "French",
  "Basque",
  "Breton",
  "Occitan",
]);

class Acquitaine extends France {}
const acquitaineData = new Acquitaine("Acquitaine", 10, ["French", "Basque"]);
