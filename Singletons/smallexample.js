class Singleton {
    constructor() {
        if(Singleton.Date){
            return this
        }
        this.date = new Date();
        Singleton.Date = this
    }
    getInstance(){
        return Singleton.Date
    }
    static getInstances(){
        if(!Singleton.Date){
            Singleton.Date = new Singleton
        }
        return Singleton.Date
    }
}

let data = Singleton.getInstances()
console.log(data.date)
console.log(data.getInstance().date)
