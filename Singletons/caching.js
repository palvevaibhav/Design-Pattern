/**
 * Here only one this like make one object and insert it data if data already having then do 
 * not update it....
 */

class Caching {
    constructor() {
        if(Caching.Instance){
            return Caching.Instance
        }
        this.caching = {}
        Caching.Instance = this
    }
    set(key, value){
        return this.caching[key] = value
    }
    get(key){
        return this.caching[key]
    }
}

let change = new Caching()
console.log(change.set("name", "vaibhav"))
console.log(change.get("name"))
console.log(change.set("s_name", "something"))
console.log(change.get("s_name"))
console.log(change)