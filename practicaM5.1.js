
function showResults(){
let wordsNum = Number (document.getElementById("wordsNum").value)
validateNum(wordsNum)
let i = 0
let sumUserWords=[]
let userWords=""

while (i < wordsNum){

userWords = prompt("Introduce las palabras que quieras escribir en pantalla")
sumUserWords.push(userWords)
i++
}

document.getElementById("results").innerHTML=sumUserWords

function validateNum(p1) {
    if (p1 < 0 || p1 > 120 || isNaN(p1))  {
      alert("[ERROR] El número debe ser mayor a 0 y menor a 120");
      throw "error en número escogido";
    }
  }
}

//Usando loop for (corregido)

/*function showResults(){
    //guardar el numero que introduim en una variable
let numeroIntroducido = (document.getElementById("numWords").value)
parseInt(numeroIntroducido)

//fer una variable per posar les paraules
let WordsList = [];

for (let i = 0; i < numeroIntroducido; i++) {
    answerUser = prompt('Escribe las palabras una por una: ');
    WordsList.push(answerUser);
}

document.getElementById("arrayList").value = WordsList;

}*/
