const mongoos = require("mongoose");

function connectToDb () {

mongoos.connect(process.env.MONGO_URI)  

.then(()=>{
    console.log("database is connected to the server");
    
})

}

module.exports = connectToDb