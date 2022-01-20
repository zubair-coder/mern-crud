const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/crud",{useNewUrlParser:true}).then(()=>{
        console.log("Connected to mongodb Successfully")
}).catch(error=>{
    console.log("Error in DB Connection"+ error.message)
});