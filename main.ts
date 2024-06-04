// Vehicle interface
interface Car {
    make: string;
    model: string;
    year: number;
    start(): void;
}

class Car implements Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

// Create an instance of the Car class and initialize it with values
const MyCar = new Vehicle("Toyota", "Corolla", 2021);

// Call the start method on the instance of the Car class
MyCar.start();
