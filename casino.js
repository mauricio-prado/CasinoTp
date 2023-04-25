"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var ReadlineSync = require("readline-sync");
var Casino = /** @class */ (function () {
    function Casino(pNombre, pLocalidad, pDireccion) {
        this.nombre = pNombre;
        this.localidad = pLocalidad;
        this.direccion = pDireccion;
    }
    Casino.prototype.incripcion = function () {
        console.clear();
        console.log("\n                     BIENVENIDO A CASINO ".concat(this.nombre, "\n        Direccion: ").concat(this.direccion, "    localidad: ").concat(this.localidad, " \n                "));
        this.jugador = ReadlineSync.question("Ingrese su nombre: ");
        console.log("Bienvenido ".concat(this.jugador));
        this.saldo = ReadlineSync.question("".concat(this.jugador, " ingrese monto de dinero para su trajeta:"));
    };
    Casino.prototype.elegirJuego = function () {
        console.log("Por favor elija un modo de juego");
        console.log("Presione 1 para TRAGAMONEDAS DE NUMEROS");
        console.log("Presione 2 para TRAGAMONEDAS DE FRUTAS");
        console.log("Presione 3 para RULETA");
        var comenzar = ReadlineSync.question();
        if (comenzar === 1) {
            console.log("");
        }
    };
    return Casino;
}());
exports.Casino = Casino;
var casino1 = new Casino("Bover", "Las FLores", "San Martin y Sarmiento");
casino1.incripcion();
