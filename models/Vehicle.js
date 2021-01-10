const VEHICLECONSTANT = require('../constants/constants');

class Vehicle {
  /**
  * Represents a Vehicle
  * @constructor
  * @param {String} customerName - Name of the customer company
  */
  constructor(regNo, color, type, size, weight) {
    this.regNo = regNo;
    this.color = color;
    this.type = type;
    this.size = size;
    this.weight = weight;
  }

  // get Vehicle description
  getDescription = () => {
    return `Vehicle Registration No - ${this.regNo} with color - ${this.color}`; 
  }
}

function VehicleFactory() {
  this.create = (type, regNo, color) => {
    switch(type) {
      case 'CAR':
        return new Vehicle(regNo, color, type, VEHICLECONSTANT.CARSIZE, VEHICLECONSTANT.CARWEIGHT);
      case 'MOTORCYCLE':
        return new Vehicle(regNo, color, type, VEHICLECONSTANT.MOTORCYCLESIZE, VEHICLECONSTANT.MOTORCYCLEWEIGHT);
      case 'BUS':
        return new Vehicle(regNo, color, type, VEHICLECONSTANT.BUSSIZE, VEHICLECONSTANT.BUSWEIGHT);
    }
  }
}
module.exports = VehicleFactory;