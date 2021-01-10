const ParkingSlot = require('./models/ParkingSlot');
const VehicleFactory = require('./models/Vehicle');

const parkingSlot = new ParkingSlot(2, 2);

const vehicleFactory = new VehicleFactory();
const ferrari = vehicleFactory.create('CAR', 'MH-LM-3918', 'Black');
const mercedes = vehicleFactory.create('BUS', 'KAR-LM-12103', 'GREY');
const bullet = vehicleFactory.create('MOTORCYCLE', 'MOR-AV-874', 'RED');
const dominar = vehicleFactory.create('MOTORCYCLE', 'MOR-JF-4322', 'BLUE');

console.log(parkingSlot.parkIn(ferrari));
console.log(parkingSlot.parkIn(mercedes));
console.log(parkingSlot.parkIn(bullet));
console.log(parkingSlot.parkOut(mercedes));
console.log('reusing slot');
console.log(parkingSlot.parkIn(dominar));

console.log(parkingSlot.getParkingSlot('MOR-AV-874'));

