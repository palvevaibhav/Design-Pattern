/***
 * Listener order: Always attach event listeners before emitting the events to make sure listeners can react to the events. If the event is emitted before the listener is set, it won't catch the event.
 */

const EventEmitter = require('events');

class EventEmitterSingleton extends EventEmitter {
    constructor() {
        super(); // Call the EventEmitter constructor
        if (EventEmitterSingleton.instance) {
            return EventEmitterSingleton.instance; // If instance exists, return it
        }
        EventEmitterSingleton.instance = this; // Store the singleton instance
    }
}
let e = new EventEmitterSingleton()

e.on("Loggin", (data)=>{
    console.log("logging me " + data)
})
e.emit("Loggin", true)
// console.log(e)