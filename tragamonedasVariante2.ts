import * as ReadlineSync from 'readline-sync';
import { PadreTragamonedas } from "./padreTragramonedas";
import { Casino } from './casino';

export class TragamonedasDos extends PadreTragamonedas{
    protected fruta1: string;
    protected fruta2: string;
    protected fruta3: string;
    protected saldo: number;
    protected apuesta: number;
    protected darPaso: boolean;

 
    constructor(){
        super();
    }

    public apostar(): void {
        console.log("BIENVENIDO AL TRAGAMONEDAS DE FRUTAS");
     this.apuesta = ReadlineSync.question("ingrese apuesta: ");

   
    if(this.apuesta > 5){
        this.darPaso = true;
        console.log(`     |     Su Apuesta fue de: $${this.apuesta}     |`);
        this.generarValores();
        this.girarRodillo();
        this.comparacion();
        //this.funcionSaldo();
        this.jugarOtraVez();
    }else{
        console.log("SU APUESTA NO ES VALIDA!")
        this.apostar()
    }
    }

    public generarValores(): void {
        let valor1: number = Math.floor(Math.random()* 5 + 1);
        let valor2: number = Math.floor(Math.random()* 5 + 1);
        let valor3: number = Math.floor(Math.random()* 5 + 1);
       switch(valor1){
        case 1:
            this.fruta1 = "Naranja"
            break;
        case 2:
            this.fruta1 = "Pomelo"
            break;
        case 3:
            this.fruta1 = "Manzana"
            break;
        case 4:
            this.fruta1 = "Uva"
            break;
        case 5:
            this.fruta1 = "Kiwi"
            break;
       }

       switch(valor2){
        case 1:
            this.fruta2 = "Naranja"
            break;
        case 2:
            this.fruta2 = "Pomelo"
            break;
        case 3:
            this.fruta2 = "Manzana"
            break;
        case 4:
            this.fruta2 = "Uva"
            break;
        case 5:
            this.fruta2 = "Kiwi"
            break;
       }

       switch(valor3){
        case 1:
            this.fruta3 = "Naranja"
            break;
        case 2:
            this.fruta3 = "Pomelo"
            break;
        case 3:
            this.fruta3 = "Manzana"
            break;
        case 4:
            this.fruta3 = "Uva"
            break;
        case 5:
            this.fruta3 = "Kiwi"
            break;
       }


    }

    public girarRodillo(): void {
    console.clear();
    console.log(`LOS VALORES SON:   |   ${this.fruta1}    |   ${this.fruta2}    |   ${this.fruta3}  |`)
        
    }

    public comparacion(): void {
    if(this.fruta1 === this.fruta2 && this.fruta1 === this.fruta3){
        console.log(`USTED GANO. SU SALDO ES DE:   ${this.saldo = this.saldo + (this.apuesta * 2)}`);
    }else(console.log(`NO HAY COMBINACION, PERDISTE. SU SALDO ES DE:   ${this.saldo = this.saldo - this.apuesta}`));
    }

    public jugarOtraVez(): void {
    let jugarDeNuevo = ReadlineSync.question("Desea jugar de nuevo? si/no: ")
    if(jugarDeNuevo == "si"){
    this.apostar();
    }else{
    console.log("Muchas Gracias Por Jugar");
    let casinoNew: Casino = new Casino("wqd", "efwf", "grev");
    casinoNew.elegirJuego()
    }
    }
}

