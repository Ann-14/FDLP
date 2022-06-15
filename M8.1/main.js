import { Ordinador } from "./ordinador.js";
console.log(Ordinador);

function crearOrdinadors() {
  let marca, modelo, procesador, memoriaRam, discDur;
  let primerPc = "";
  let segundoPc =""

  marca = prompt("Introduce la marca del PC(1)");
  modelo = prompt("Introduce el modelo del PC(1)");
  procesador = prompt("Introduce el procesador del PC(1)");
  memoriaRam = prompt("Introduce la cantidad de memoria RAM del PC(1)");
  discDur = prompt("Introducela capacidad del disco duro del PC(1)");

   primerPc = new Ordinador( marca, modelo, procesador, memoriaRam, discDur)

  let marca2, modelo2, procesador2, memoriaRam2, discDur2;
  

  marca2 = prompt("Introduce la marca del PC(2)");
  modelo2 = prompt("Introduce el modelo del PC(2)");
  procesador2 = prompt("Introduce el procesador del PC(2)");
  mRam2 = prompt("Introduce la cantidad de memoria RAM del PC(2)");
  discDur2 = prompt("Introducela capacidad del disco duro del PC(2)");

  segundoPc = new Ordinador( marca2, modelo2, procesador2, memoriaRam2, discDur2)

  console.log(segundoPc);

    primerPc.getAtributs()

  document.getElementById("firstPc").innerHTML = primerPc
  document.getElementById("secondPc").innerHTML = segundoPc

}

document.getElementById('buttonOne').addEventListener('click', () => crearOrdinadors())
crearOrdinadors()
