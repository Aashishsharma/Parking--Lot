class ParkingTicket {
  /**
  * Represents a Parking Ticket
  * @constructor
  * @param {vehicle} vehicle - vehicle
  */
  constructor(vehicle) {
    this.vehicle = vehicle;
    this.inTime = null;
    this.outTIme = null;
  }
}

module.exports = ParkingTicket;