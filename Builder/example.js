class Pizz {
    constructor() {
        this.size = null;
        this.crust = null;
        this.cheese = null;
        this.toppings = [];
    }
    describe() {
        console.log(`Size: ${this.size}, Crust: ${this.crust}, Cheese: ${this.cheese}, Toppings: ${this.toppings.join(", ")}`);
    }
}

class PizzBuilder {
    constructor() {
        this.pizz = new Pizz();
    }

    size(value) {
        this.pizz.size = value;
        return this;
    }

    crust(value) {
        this.pizz.crust = value;
        return this;
    }

    cheese(value) {
        this.pizz.cheese = value;
        return this;
    }

    toppings(value) {
        if (typeof value === 'string') {
            this.pizz.toppings = value.split(',').map(item => item.trim());
        } else {
            this.pizz.toppings = value;
        }
        return this;
    }

    bind() {
        return this.pizz;
    }
}
class SetConfiguration {
    constructor(value){
        if(SetConfiguration.Instance){
            return SetConfiguration.Instance;
        }
        this.api = value;
        SetConfiguration.Instance = this; // Create the singleton instance
    }

    getInstance(){
        return SetConfiguration.Instance; // Return the singleton instance
    }

    static getInstances (){
        // If instance doesn't exist, create one
        if(!SetConfiguration.Instance){
            new SetConfiguration("Default API Key");
        }
        return SetConfiguration.Instance; // Return the singleton instance
    }
}

// Factory Class
class Factory {
    constructor(key) {
        this.key = key;
    }

    set(value) {
        if (value === "pizz") {
            // Create a pizza using the builder pattern
            const pizza = new PizzBuilder().size(2)
                .crust("Thin")
                .cheese("Mozzarella")
                .toppings("Tomato, Olives, Pepperoni")
                .bind();
            pizza.describe();
            return pizza;  // Return pizza instance
        }
        else if (value === "singleTon") {
            // Use Singleton pattern to return the configuration instance
            const instance = new SetConfiguration(this.key || "Default API Key");
            return instance;  // Return singleton instance
        }
    }
}

// Testing Factory, Singleton, and Builder patterns

// Create a factory instance
let classFactory = new Factory("palve");

// Build a pizza using the factory
console.log(classFactory.set("pizz"));

// Create a singleton instance and get it
let singletonInstance = classFactory.set("singleTon");
console.log(singletonInstance.getInstance());

// Get the same singleton instance again
let anotherSingletonInstance = classFactory.set("singleTon");
console.log(anotherSingletonInstance.getInstance());

// Check if both instances are the same
console.log(singletonInstance === anotherSingletonInstance); // true
