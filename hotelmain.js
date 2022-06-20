import {Hotel} from "./Hotels.js"

let hotelList = [];

function createHotel() {
  let hotelName, roomsNumber, floorsNumber, areaNumber;
  let firstHotel = "";

  hotelName =  prompt("Introduce el nombre del hotel");
  roomsNumber=parseInt( prompt("Introduce el número de habitaciones del hotel"))
  floorsNumber = parseInt( prompt("Introduce el número de plantas hotel"))
  areaNumber=  parseInt( prompt("Introduce la superficie del hotel"))

  firstHotel = new Hotel(hotelName, roomsNumber, floorsNumber, areaNumber);
  hotelList.push(firstHotel);
console.log(hotelList)

 //document.getElementById("maintenance").innerHTML=firstHotel.calculateMaintenance()
 
  
}


document.getElementById("newHotel").addEventListener("click", createHotel)
document.getElementById("deleteHotel").addEventListener('click', deleteHotel)
document.getElementById("getHotelInfo").addEventListener("click",checkHotel)




function deleteHotel(){
    
    let nameToDelete = prompt("Introduce el nombre del hotel que quieras eliminar")
    let confirmDelete = confirm(`Deseas eliminar el ${nameToDelete}?`)
    let index=""

    if(confirmDelete === true){
        //En newArrayList se guarda el nombre del hotel que queremos eliminar
         //newArrayList = hotelList.filter(hotelList => hotelList.getHotelName() === nameToDelete)
         
     index = hotelList.findIndex(hotelList => hotelList.getHotelName() === nameToDelete)}
         
         if (index > -1) {
            hotelList.splice(index, 1);
            console.log(hotelList)
         }else{alert("El hotel no está en nuestra app")}
         console.log(hotelList)
        
    }
 
    function checkHotel() {
        let hotelToCheck = prompt("Introduce el nombre del hotel que quieras consultar")
        let checkedHotel=false

        for(let i =0; i < hotelList.length; i++){
           if(hotelList[i].getHotelName() === hotelToCheck){
                
             alert (`El nombre del hotel es ${hotelList[i].getHotelName()}, el numero de habitaciones es ${hotelList[i].getRoomsNumber()}
              el número de plantas es: ${hotelList[i].getFloorsNumber()}, la superficie es de ${hotelList[i].getAreaNumber()},
              ${hotelList[i].calculateMaintenance()}`)
                checkedHotel=true
                break; 
            }
         }
    
           if (checkedHotel === false){alert("El hotel no se encuentra en la lista")}

    }  
    

    function modifyHotel(){
        let hotelToCheck = prompt("Indica el nombre del hotel que quieras modificar")
        let modifiedHotel=false

        for(let i =0; i < hotelList.length; i++){
            if(hotelList[i].getHotelName() === hotelToCheck){
                let name = prompt("Introduce el nombre correcto")
                let roomsNumber = prompt("Indica el número de habitaciones")
                let floorsNumber = prompt("Indica el número de pisos correcto")
                let totalArea = prompt("Indica el nombre de m2 correcto")
  
                hotelList[i].modifyHotel(name,roomsNumber,floorsNumber,totalArea)
                alert("Información actualizada")
                 console.log(hotelList)
                 modifiedHotel=true
             }
            }
           if(modifiedHotel===false)
                 { alert(`El hotel ${hotelToCheck} no se encuentra en la lista`)}

        document.getElementById("modifiedHotel").innerHTML = hotelList.toString()
    }
    
    document.getElementById("modifyHotel").addEventListener("click", modifyHotel)