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
exports.TragamonedasDos = void 0;
var ReadlineSync = require("readline-sync");
var padreTragramonedas_1 = require("./padreTragramonedas");
var casino_1 = require("./casino");
var TragamonedasDos = /** @class */ (function (_super) {
    __extends(TragamonedasDos, _super);
    function TragamonedasDos() {
        return _super.call(this) || this;
    }
    TragamonedasDos.prototype.apostar = function () {
        console.log("BIENVENIDO AL TRAGAMONEDAS DE FRUTAS");
        this.apuesta = ReadlineSync.question("ingrese apuesta: ");
        if (this.apuesta > 5) {
            this.darPaso = true;
            console.log("     |     Su Apuesta fue de: $".concat(this.apuesta, "     |"));
            this.generarValores();
            this.girarRodillo();
            this.comparacion();
            //this.funcionSaldo();
            this.jugarOtraVez();
        }
        else {
            console.log("SU APUESTA NO ES VALIDA!");
            this.apostar();
        }
    };
    TragamonedasDos.prototype.generarValores = function () {
        var valor1 = Math.floor(Math.random() * 5 + 1);
        var valor2 = Math.floor(Math.random() * 5 + 1);
        var valor3 = Math.floor(Math.random() * 5 + 1);
        switch (valor1) {
            case 1:
                this.fruta1 = "Naranja";
                break;
            case 2:
                this.fruta1 = "Pomelo";
                break;
            case 3:
                this.fruta1 = "Manzana";
                break;
            case 4:
                this.fruta1 = "Uva";
                break;
            case 5:
                this.fruta1 = "Kiwi";
                break;
        }
        switch (valor2) {
            case 1:
                this.fruta2 = "Naranja";
                break;
            case 2:
                this.fruta2 = "Pomelo";
                break;
            case 3:
                this.fruta2 = "Manzana";
                break;
            case 4:
                this.fruta2 = "Uva";
                break;
            case 5:
                this.fruta2 = "Kiwi";
                break;
        }
        switch (valor3) {
            case 1:
                this.fruta3 = "Naranja";
                break;
            case 2:
                this.fruta3 = "Pomelo";
                break;
            case 3:
                this.fruta3 = "Manzana";
                break;
            case 4:
                this.fruta3 = "Uva";
                break;
            case 5:
                this.fruta3 = "Kiwi";
                break;
        }
    };
    TragamonedasDos.prototype.girarRodillo = function () {
        console.clear();
        console.log("LOS VALORES SON:   |   ".concat(this.fruta1, "    |   ").concat(this.fruta2, "    |   ").concat(this.fruta3, "  |"));
    };
    TragamonedasDos.prototype.comparacion = function () {
        if (this.fruta1 === this.fruta2 && this.fruta1 === this.fruta3) {
            console.log("USTED GANO. SU SALDO ES DE:   ".concat(this.saldo = this.saldo + (this.apuesta * 2)));
        }
        else
            (console.log("NO HAY COMBINACION, PERDISTE. SU SALDO ES DE:   ".concat(this.saldo = this.saldo - this.apuesta)));
    };
    TragamonedasDos.prototype.jugarOtraVez = function () {
        var jugarDeNuevo = ReadlineSync.question("Desea jugar de nuevo? si/no: ");
        if (jugarDeNuevo == "si") {
            this.apostar();
        }
        else {
            console.log("Muchas Gracias Por Jugar");
            var casinoNew = new casino_1.Casino("wqd", "efwf", "grev");
            casinoNew.elegirJuego();
        }
    };
    return TragamonedasDos;
}(padreTragramonedas_1.PadreTragamonedas));
exports.TragamonedasDos = TragamonedasDos;
