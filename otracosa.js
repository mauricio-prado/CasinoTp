"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var apuesta = ReadlineSync.question("ingrese apuesta: ");
if (apuesta > 5) {
    console.log("su apuesta es de ".concat(apuesta));
}
