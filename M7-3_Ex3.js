/*L’usuari ha d’introduir una frase i el programa ha de dir si la frase és un palíndrom*/

function showResults() {
  let userInput = prompt("Introduce una frase");

  userInput = userInput.toLocaleLowerCase();
  userInput = userInput.replace(/ /g, "");

  for (let i = 0; i < userInput.length; i++) {

     if (userInput[i] !== userInput[userInput.length - i - 1]) {
      document.getElementById("results").innerHTML = `${userInput} NO es un palíndromo`
      //alert(userInput + "NO es un palíndromo");
      throw Error("not palindrom");
    } else {
      document.getElementById("results").innerHTML = `${userInput} es un palíndromo`
      //alert(userInput + "es un palíndromo");
      break;
    }
  }
}
