function vehicle() {

    var engineCapacity, numberOfTyres, numberOfDoors;

    this.getEngineType = function () {
        return engineCapacity;
    };
    this.setEngineType = function (enCapacity) {
        engineCapacity = enCapacity;
    };
    this.getNumberOfTyres = function () {
        return numberOfTyres;
    };
    this.setNumberOfTyres = function (numTyres) {
        numberOfTyres = numTyres;
    };
};
//static property
vehicle.surfaceType = "ROAD";
//Bus Object
var bus = new vehicle();


bus.numberOfDoors = 2;
bus.setEngineType("10000cc");
bus.setNumberOfTyres("6");
console.log(bus.getNumberOfTyres());
console.log(bus.getEngineType());

//Bike Object

var bike = new vehicle();
bike.setEngineType("400cc");
bike.setNumberOfTyres(2);

console.log(bike);
vehicle.prototype.iginitionType = "key";
