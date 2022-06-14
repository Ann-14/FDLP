/*L’usuari ha d’introduir un DNI i el programa ha de dir si la lletra és correcte o no amb el nombre de DNI. Si la lletra no és correcta, ha de dir quina lletra és la correcta.

Per calcular la lletra DNI has de prendre el número de DNI a verificar i dividir-lo entre 23. La resta es reemplaça per una lletra que ja està assignada a aquest nombre mitjançant la taula adjunta:.*/

function showResults() {

  
  let letters = [ "T","R","W","A","G","M","Y","F","P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", ];

  let userDni = prompt("introduce tu número de DNI");

  //separem lletra DNI
  let userLetter = userDni.slice(-1);
  //passem a uppercase la lletra per evitar error x min o masc
  userLetter = userLetter.toUpperCase()
  //separem num dni
  let userDniNum = Number(userDni.slice(0, 8));
  console.log(userDniNum)
  //Calculem el num de la lletra

  
  //calculamos el resto del dni y lo guardamos en una variable
  resto =  userDniNum % 23
  
//creamos una varibale en la que el resto es la posicion del array "Letters"
  letterCalculation = letters[resto]


 if(letterCalculation != userLetter) {
    alert("La letra o el número proporcionados no son correctos");
  }
  else {
    alert("El número de DNI y su letra son correctos");
  }
}

  

  

