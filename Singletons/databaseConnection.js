/**
 * If we connected DB once then we do not need to change it URL once connected then
 * connected all time...
 */

class Connection {
    constructor() {
        if(Connection.URL){
            return Connection.URL
        }
        this.connecting = "localhost:8080"
        //connect clint here 
        Connection.URL = this
    }
    getConnectionURL(){
        return Connection.URL
    }
}
const db1 = new Connection();
const db2 = new Connection();
console.log(db1.getConnectionURL(), db2)
console.log(db1 === db2);  // true, both are the same instance
