const app = require("./src/app");
const connectToDb = require("./src/config/database");

require("dotenv").config();


app.listen(3000 , ()=>{
    console.log("server is running on port 3000 by sabil");
    
})

connectToDb()