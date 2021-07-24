const express = require('express');
const app = express();
const port = 4000;
const data = require("../userdata/data.js");

app.use(express.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.get("/get", (req,res)=>{
    res.status(200);
    res.send(data.data);
})

app.listen(port)