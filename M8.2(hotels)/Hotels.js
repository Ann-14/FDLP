export class Hotel {
  #hotelName;
  #roomsNumber;
  #floorsNumber;
  #areaNumber;

  constructor(hotelName, roomsNumber, floorsNumber, areaNumber) {
    this.#hotelName = hotelName;
    this.#roomsNumber = roomsNumber;
    this.#floorsNumber = floorsNumber;
    this.#areaNumber = areaNumber;
  }

  getHotelName() {
    return this.#hotelName;
  }
  getRoomsNumber() {
    return this.#roomsNumber;
  }
  getFloorsNumber() {
    return this.#floorsNumber;
  }
  getAreaNumber() {
    return this.#areaNumber;
  }

  modifyHotel(hotelName, roomsNumber, floorsNumber, areaNumber) {
    this.#hotelName = hotelName;
    this.#roomsNumber = roomsNumber;
    this.#floorsNumber = floorsNumber;
    this.#areaNumber = areaNumber;
  }

  calculateMaintenance() {
    
  
        const peopleNeeded = parseInt(this.#roomsNumber / 20);
        const totalCost = Number(peopleNeeded * 1500);
        
       
    return (`El número de personas necesarias para el mantenimiento del hotel son: ${peopleNeeded} personas.
    El sueldo total de ${peopleNeeded} es de ${totalCost} $`)
    
  }
}
