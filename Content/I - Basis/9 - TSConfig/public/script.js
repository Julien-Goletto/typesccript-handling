"use strict";
// tsc --init pour créer le fichier de config par défaut
// tsc -w pour la compilation on save
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6];
// Certaines foncitonnalités ne sont pas transpilable en ES5 :
const pList = document.querySelectorAll('p');
const arrFromNodeList = [...pList];
// Gérer les exclusions et inclusions dans une règle spécifique du tsconfig
// On peut aussi utiliser les règles rootDir et outDir pour régler les sources et cibles de compilation
