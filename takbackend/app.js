const exp = require('constants');
const express = require('express');
const app = express();
const port = 3000;
const tak = require('./routes/tak')

// const bodyParser = require(body-parser);

// app.use(bodyParser.json());
app.use('/api',tak);
app.listen(port, ()=>{
    console.log("server started at",port);
})

