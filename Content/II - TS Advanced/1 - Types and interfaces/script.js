"use strict";
const brucie = {
    fin: 3,
    element: "water",
    gills: true,
    weight: 600,
    length: 3,
    color: "brown",
};
let obj;
const redRose = {
    pollen: true,
    type: "vegetal",
    color: "red",
    thorn: true,
};
const automaticResponse = (country) => (country.lang === "JP") ? console.log("Conichiwa !") : console.log("Buongiorno !");
const japanese1 = {
    lang: "JP",
    food: ["ramen", "sushis"],
};
automaticResponse(japanese1);
const spainTrip = {
    john: { id: 1 },
    tom: { id: 2 },
    julia: { id: 3 },
};
