/**
 * Factory design where we can create objects based on the type of object we want to
 * create.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


// sub - classes
class Sedan {
    constructor(name) {
        this.name = name || "Sedan";
    }
    drive(){
        console.log(`${this.name} is driving`);
    }
}

class suv {
    constructor(name) {
        this.name = name || "SUV";
    }
    drive(){
        console.log(`${this.name} is driving`);
    }
}

class Truck {
    constructor(name) {
        this.name = name || "Truck";
    }
    drive(){
        console.log(`${this.name} is driving`);
    }
};

// Factory class
class VehicleFactory{
    static Car(type){
        if(type==='sedan') 
            return new Sedan();
        else if(type==='suv')
            return new suv();
        else if(type==='truck')
            return new Truck();
        else
        return undefined
    }

}

let carDetails = VehicleFactory.Car('sedan');
console.log(carDetails.name);
