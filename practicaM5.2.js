function showResults() {
  let firstNum = parseInt(document.getElementById("firstNum").value);
  let secondNum = parseInt(document.getElementById("secondNum").value);
  validateNum(firstNum);
  validateNum(secondNum);
  if (firstNum >= secondNum){alert("rango inválido. El segundo número debe ser mayor al primero")}
  
  let everyNum = [];
  let sumNum = 0;
  let finalArr = "";

  for (let i = firstNum; firstNum <= secondNum; firstNum++) {
    //creamos array para introducir los num que hay desde el firstnum hasta secondnum
    everyNum.push(firstNum);
    //separamos el array con "+"
    finalArr = everyNum.join("+");
    //Añadimos a una variable los numeros acumulados en el firstNum del loop
    sumNum += firstNum;
  }
 document.getElementById("results").innerHTML = `La suma de ${finalArr} es ${sumNum}`;
}

function validateNum(p1) {
  if (p1 < 0 || p1 > 120 || isNaN(p1)) {
    alert("[ERROR] El número debe ser mayor a 0 y menor a 120");
    throw "error en número escogido";
  }
}
