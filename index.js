const express = require('express');
const dotenv = require('dotenv')
const app =express();
const cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./database/database');


const user = require('./routes/userRoute')
app.use('/user',user);

if(process.env.NODE_ENV === 'production'){
    
}

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});
