//Crea una classe "Ordinador" en un fitxer anomenat ordinador.js
//Aquesta classe tindrà com a atributs la marca, el model, el processador, la quantitat de memòria RAM i capacitat del disc dur.
export class Ordinador {

    #marca
    #model
    #processador
    #memoriaRam
    #discDur

    constructor(marca, model, processador, memoriaRam, discDur){ //Atributs
        

        this.#marca = marca
        this.#model = model
        this.#processador = processador
        this.#memoriaRam = memoriaRam
        this.#discDur = discDur
    }
    //un mètode que rebrà un paràmetre i retornarà un frase que digui:
    writeSentence(program){
        return "En aquests moments s'està executant el programa" + program}

    //mètodes que permetin consultar cadascun dels atributs
    getAtributs(){
            return (this.#marca, this.#model,this.#processador,this.#memoriaRam,this.#discDur)
            }
    //mètodes que permetin modificar el processador, la quantitat de memòria ram i la capacitat del disc dur        
    setAtributs(value){

        this.#processador=value
        this.#memoriaRam=value
        this.#discDur=value
        
    }



//un mètode que retornarà una descripció completa de l'ordinador (toString()).
  toString(){
        let description ="Descripció"+ this.#marca + this.#model+ this.#processador + this.#memoriaRam +this.#discDur;
        return description
    }


    
}  
let myPc = new Ordinador ("Lenovo","Ideapad","IntelCore","8gb","HDD")
alert(myPc)
document.getElementById("demo").innerHTML = myPc.writeSentence("Chrome")
