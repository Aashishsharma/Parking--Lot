class ParkingSlot {  
  /**
  * Represents a ParkingSlot.
  * @constructor
  * @param {number} levels  - No. of levels in the parking lot.
  * @param {number} rows - No. of rows in the parking lot.
  */
  constructor(levels, rows) {
    this.levels = levels;
    this.rows = rows;
    this.currLevel = 0;
    this.currRow = 0;
    this.vehiclesParked = new Map();
    this.reusableSlot = [];
  }

  // park vehicle
  parkIn(vehicle) {
    if (this.reusableSlot.length === 0) {
      const slotNo = this.getSlotNo();
      if (slotNo[0] === -1 && slotNo[1] === -1) {
        return 'No slot available';
      }
      this.vehiclesParked.set(vehicle, slotNo);  
      return `parked on Slot ${slotNo}`;
    } else {
      const reuseSlot = this.reusableSlot[0];
      this.vehiclesParked.set(vehicle, reuseSlot);
      this.reusableSlot.shift();
      return `parked on Slot ${reuseSlot}`;
    }
  }

  // exit vehicle
  parkOut(vehicle) {
    if(this.vehiclesParked.has(vehicle)) {
      this.reusableSlot.push(this.vehiclesParked.get(vehicle));
      this.vehiclesParked.delete(vehicle);
      return 'vehicle exiting';
    } else {
      return 'no such vehicle parked';
    }
  }

  getSlotNo() {
    if (this.currRow < this.rows) {
      this.currRow++;
      return [this.currLevel, this.currRow-1];
    } else {
      this.currLevel++;
      if (this.currLevel < this.levels) {
        this.currRow = 1;
        return [this.currLevel, this.currRow-1];
      } else {
        console.log('Parking full cannot add more vehicles');
        return [-1, -1];
      }
    }
  }

  // query 4 - get parking slot
  getParkingSlot(vehicleRegNo) {
    let slotNoofVehicle = null;
    this.vehiclesParked.forEach((slotNo, vehicle) => {
      if (vehicle.regNo === vehicleRegNo) {
        slotNoofVehicle = slotNo;   
      }
    });

    return slotNoofVehicle;
  }

  // get Parking lot description
  getDescription = () => {
    return `This parking has ${this.levels} levels and each level has ${this.rows} rows`; 
  }
};

module.exports = ParkingSlot;
