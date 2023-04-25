import * as ReadlineSync from 'readline-sync';
import { PadreTragamonedas } from "./padreTragramonedas";
import { TragamonedasUno } from "./tragamonedasVariante1";
import { TragamonedasDos } from "./tragamonedasVariante2";
import { Ruletaa } from "./ruleta";
import { Apuesta } from "./ruleta";

export class Casino{
    protected nombre:string;
    protected localidad:string;
    protected direccion:string;
    protected apuesta:number;
    protected saldo: number;
    protected jugador: string;

    


public constructor(pNombre:string, pLocalidad:string, pDireccion:string){
    this.nombre = pNombre;
    this.localidad = pLocalidad;
    this.direccion = pDireccion;
}   


public incripcion(): void{
    console.clear();
    console.log(`
                     BIENVENIDO A CASINO ${this.nombre}
        Direccion: ${this.direccion}    localidad: ${this.localidad} 
                `)
this.jugador = ReadlineSync.question("Ingrese su nombre: ");
    console.log(`Bienvenido ${this.jugador}`)
this.saldo = ReadlineSync.question(`${this.jugador} ingrese monto de dinero para su trajeta:` );
}

public elegirJuego(): void{
    console.log("Por favor elija un modo de juego");
    console.log("Presione 1 para TRAGAMONEDAS DE NUMEROS");
    console.log("Presione 2 para TRAGAMONEDAS DE FRUTAS");
    console.log("Presione 3 para RULETA");
    let comenzar = ReadlineSync.question();
    if(comenzar === 1){
        console.log("");
    }
    }
}


let casino1: Casino = new Casino("Bover", "Las FLores", "San Martin y Sarmiento");
casino1.incripcion()