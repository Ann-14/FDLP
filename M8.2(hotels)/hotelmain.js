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
        let found =  hotelList.find(element => element.getHotelName()=== hotelToCheck)

        if(found.getHotelName() === hotelToCheck){
          
        alert (`El nombre del hotel es ${found.getHotelName()}, el numero de habitaciones es ${found.getRoomsNumber()}
        el número de plantas es: ${found.getFloorsNumber()}, la superficie es de ${found.getAreaNumber()},
        ${found.calculateMaintenance()}`)}

        else(alert("El hotel no se encuentra en la lista"))

        
    }

    function modifyHotel(){
        let hotelToCheck = prompt("Indica el nombre del hotel que quieras modificar")
        let found =  hotelList.find(element => element.getHotelName()=== hotelToCheck)
        let newhotel=[]

             if(found.getHotelName() === hotelToCheck){
                let name = prompt("Introduce el nombre correcto")
                let roomsNumber = prompt("Indica el número de habitaciones")
                let floorsNumber = prompt("Indica el número de pisos correcto")
                let totalArea = prompt("Indica el nombre de m2 correcto")

                 newhotel.push(name,roomsNumber,floorsNumber,totalArea)
                 console.log(newhotel)
                 alert("Información actualizada")

              }else{alert(`El hotel ${hotelToCheck} no se encuentra en la lista`)}

        document.getElementById("modifiedHotel").innerHTML = newhotel
    }
    
    document.getElementById("modifyHotel").addEventListener("click", modifyHotel)