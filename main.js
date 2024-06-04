var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Vehicle.prototype.start = function () {
        console.log("Car engine started");
    };
    return Vehicle;
}());
// Create an instance of the Car class and initialize it with values
var car = new Vehicle("Toyota", "Corolla", 2021);
// Call the start method on the instance of the Car class
car.start();
