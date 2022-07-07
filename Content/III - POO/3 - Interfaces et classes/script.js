"use strict";
class Norway {
    constructor(name, pop, lang, capital) {
        this.name = name;
        this.pop = pop;
        this.lang = lang;
    }
}
const norwayData = new Norway("Norway", 9, ["Norvegian", "English"], "Oslo");
// La même interface peut être utilisée pour plein de classes différentes
class France {
    constructor(name, pop, lang) {
        this.name = name;
        this.pop = pop;
        this.lang = lang;
    }
}
const franceData = new France("France", 70, [
    "French",
    "Basque",
    "Breton",
    "Occitan",
]);
class Acquitaine extends France {
}
const acquitaineData = new Acquitaine("Acquitaine", 10, ["French", "Basque"]);
