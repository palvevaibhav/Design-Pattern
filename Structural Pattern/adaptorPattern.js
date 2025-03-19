/**
 * Adaptor Pattern
 * The Adapter Design Pattern is a structural design pattern that allows objects with incompatible
 * interfaces to work together. It acts as a bridge between two interfaces, converting one interface
 * into another that a client expects.
 * example payment gateway, like paypal, stripe, etc. logging system, etc., where we can use the
 * adapter pattern to make them work together.
 * Database Adapters 
 * cloud Service Adapters
 */


// Adaptee
class stripePaymentGateway {
    constructor() {
        this.stripe = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';
    }
    pay(amount) {
        return `Stripe Payment of $${amount} is successful`;
    }
}
