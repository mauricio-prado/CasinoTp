"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TragamonedasUno = void 0;
var ReadlineSync = require("readline-sync");
var padreTragramonedas_1 = require("./padreTragramonedas");
var TragamonedasUno = /** @class */ (function (_super) {
    __extends(TragamonedasUno, _super);
    function TragamonedasUno() {
        return _super.call(this) || this;
    }
    TragamonedasUno.prototype.apostar = function () {
        console.log("BIENVENIDO AL TRAGAMONEDAS DE NUMEROS");
        this.apuesta = ReadlineSync.question("ingrese apuesta: ");
        if (this.apuesta > 5) {
            this.darPaso = true;
            console.log("     |     Su Apuesta fue de: $".concat(this.apuesta, "     |"));
            this.generarValores();
            this.girarRodillo();
            this.comparacion();
            this.jugarOtraVez();
        }
        else {
            console.log("SU APUESTA NO ES VALIDA!");
            this.apostar();
        }
    };
    TragamonedasUno.prototype.generarValores = function () {
        if (this.darPaso == true) {
            this.filaUnoA = Math.floor(Math.random() * 10 + 1);
            this.filaUnoB = Math.floor(Math.random() * 10 + 1);
            this.filaUnoC = Math.floor(Math.random() * 10 + 1);
            this.filaDosA = Math.floor(Math.random() * 10 + 1);
            this.filaDosB = Math.floor(Math.random() * 10 + 1);
            this.filaDosC = Math.floor(Math.random() * 10 + 1);
            this.filaTresA = Math.floor(Math.random() * 10 + 1);
            this.filaTresB = Math.floor(Math.random() * 10 + 1);
            this.filaTresC = Math.floor(Math.random() * 10 + 1);
        }
    };
    TragamonedasUno.prototype.girarRodillo = function () {
        console.clear();
        console.log("SU RESULTADO ES:");
        console.log("     FILA 1      | ".concat(this.filaUnoA, " | ").concat(this.filaUnoB, " | ").concat(this.filaUnoC, " |"));
        console.log("     FILA 2      | ".concat(this.filaDosA, " | ").concat(this.filaDosB, " | ").concat(this.filaDosC, " |"));
        console.log("     FILA 3      | ".concat(this.filaTresA, " | ").concat(this.filaTresB, " | ").concat(this.filaTresC, " |"));
    };
    TragamonedasUno.prototype.comparacion = function () {
        if (this.filaUnoA === this.filaUnoB && this.filaUnoA === this.filaUnoC
            || (this.filaUnoA === this.filaDosB && this.filaUnoA === this.filaDosC)
            || (this.filaUnoA === this.filaTresB && this.filaUnoA === this.filaTresC)
            || (this.filaUnoA === this.filaDosB && this.filaUnoA === this.filaTresC)
            || (this.filaUnoA === this.filaTresB && this.filaUnoA === this.filaDosC)) {
            console.log("USTED GANO. SU SALDO ES DE:   ".concat(this.saldo = this.saldo + (this.apuesta * 2)));
        }
        else if (this.filaDosA === this.filaUnoB && this.filaDosA === this.filaUnoC
            || (this.filaDosA === this.filaDosB && this.filaDosA === this.filaDosC)
            || (this.filaDosA === this.filaTresB && this.filaDosA === this.filaTresC)
            || (this.filaDosA === this.filaUnoB && this.filaDosA === this.filaTresC)
            || (this.filaDosA === this.filaTresB && this.filaDosA === this.filaUnoC)) {
            console.log("USTED GANO. SU SALDO ES DE:   ".concat(this.saldo = this.saldo + (this.apuesta * 2)));
        }
        else if (this.filaTresA === this.filaUnoB && this.filaTresA === this.filaUnoC
            || (this.filaTresA === this.filaDosB && this.filaTresA === this.filaDosC)
            || (this.filaTresA === this.filaTresB && this.filaTresA === this.filaTresC)
            || (this.filaTresA === this.filaUnoB && this.filaTresA === this.filaDosC)
            || (this.filaTresA === this.filaDosB && this.filaTresA === this.filaUnoC)) {
            console.log("USTED GANO. SU SALDO ES DE:   ".concat(this.saldo = this.saldo + (this.apuesta * 2)));
        }
        else
            (console.log("NO HAY COMBINACION, PERDISTE. SU SALDO ES DE:   ".concat(this.saldo = this.saldo - this.apuesta)));
    };
    TragamonedasUno.prototype.jugarOtraVez = function () {
        var jugarDeNuevo = ReadlineSync.question("Desea jugar de nuevo? si/no: ");
        if (jugarDeNuevo == "si") {
            this.apostar();
        }
        else {
            console.log("Muchas Gracias Por Jugar");
            // this.casino()
        }
    };
    return TragamonedasUno;
}(padreTragramonedas_1.PadreTragamonedas));
exports.TragamonedasUno = TragamonedasUno;
var juego = new TragamonedasUno();
juego.apostar();
