import * as ReadlineSync from 'readline-sync';
import { PadreTragamonedas } from "./padreTragramonedas";
import { Casino } from './casino';
export class TragamonedasUno extends PadreTragamonedas{
protected filaUnoA: number;
protected filaUnoB: number;
protected filaUnoC: number;
protected filaDosA: number;
protected filaDosB: number;
protected filaDosC: number;
protected filaTresA: number;
protected filaTresB: number;
protected filaTresC: number;
protected saldo: number;
protected apuesta: number;
protected darPaso: boolean;



constructor(){
    super()
}


public apostar(): void {
    console.log("BIENVENIDO AL TRAGAMONEDAS DE NUMEROS")
 this.apuesta = ReadlineSync.question("ingrese apuesta: ")


if(this.apuesta > 5){
    this.darPaso = true;
    console.log(`     |     Su Apuesta fue de: $${this.apuesta}     |`)
    this.generarValores();
    this.girarRodillo();
    this.comparacion();
    this.jugarOtraVez();
}else{
    console.log("SU APUESTA NO ES VALIDA!")
    this.apostar()
}
}

public generarValores(): void {
    if(this.darPaso== true){

        this.filaUnoA  = Math.floor(Math.random()* 10 + 1);
        this.filaUnoB  = Math.floor(Math.random()* 10 + 1);
        this.filaUnoC  = Math.floor(Math.random()* 10 + 1);
        this.filaDosA  = Math.floor(Math.random()* 10 + 1);
        this.filaDosB  = Math.floor(Math.random()* 10 + 1);
        this.filaDosC  = Math.floor(Math.random()* 10 + 1);
        this.filaTresA = Math.floor(Math.random()* 10 + 1);
        this.filaTresB = Math.floor(Math.random()* 10 + 1);
        this.filaTresC = Math.floor(Math.random()* 10 + 1);
    }

}

public girarRodillo(): void {
    console.clear();
    console.log("SU RESULTADO ES:");
    console.log(`     FILA 1      | ${this.filaUnoA} | ${this.filaUnoB} | ${this.filaUnoC} |`);
    console.log(`     FILA 2      | ${this.filaDosA} | ${this.filaDosB} | ${this.filaDosC} |`);
    console.log(`     FILA 3      | ${this.filaTresA} | ${this.filaTresB} | ${this.filaTresC} |`);
    
}

public comparacion(): void {
    if(this.filaUnoA === this.filaUnoB && this.filaUnoA === this.filaUnoC 
    || (this.filaUnoA === this.filaDosB && this.filaUnoA === this.filaDosC) 
    || (this.filaUnoA === this.filaTresB && this.filaUnoA === this.filaTresC) 
    || (this.filaUnoA === this.filaDosB && this.filaUnoA === this.filaTresC)
    || (this.filaUnoA === this.filaTresB && this.filaUnoA === this.filaDosC)){

        console.log(`USTED GANO. SU SALDO ES DE:   ${this.saldo = this.saldo + (this.apuesta * 2)}`)

    }else if(this.filaDosA === this.filaUnoB && this.filaDosA === this.filaUnoC 
        || (this.filaDosA === this.filaDosB && this.filaDosA === this.filaDosC) 
        || (this.filaDosA === this.filaTresB && this.filaDosA === this.filaTresC) 
        || (this.filaDosA === this.filaUnoB && this.filaDosA === this.filaTresC)
        || (this.filaDosA === this.filaTresB && this.filaDosA === this.filaUnoC)){

        console.log(`USTED GANO. SU SALDO ES DE:   ${this.saldo = this.saldo + (this.apuesta * 2)}`)

    }else if(this.filaTresA === this.filaUnoB && this.filaTresA === this.filaUnoC 
        || (this.filaTresA === this.filaDosB && this.filaTresA === this.filaDosC) 
        || (this.filaTresA === this.filaTresB && this.filaTresA === this.filaTresC) 
        || (this.filaTresA === this.filaUnoB && this.filaTresA === this.filaDosC)
        || (this.filaTresA === this.filaDosB && this.filaTresA === this.filaUnoC)){

        console.log(`USTED GANO. SU SALDO ES DE:   ${this.saldo = this.saldo + (this.apuesta * 2)}`) 
        
     }else(console.log(`NO HAY COMBINACION, PERDISTE. SU SALDO ES DE:   ${this.saldo = this.saldo - this.apuesta}`))
}

public jugarOtraVez(): void {
    let jugarDeNuevo = ReadlineSync.question("Desea jugar de nuevo? si/no: ")
    if(jugarDeNuevo == "si"){
    this.apostar()
    }else{
    console.log("Muchas Gracias Por Jugar");
    // this.casino()
    }
    }
}




let juego: TragamonedasUno = new TragamonedasUno();
juego.apostar();

