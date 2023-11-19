const express = require("express");
app = express();
bodyparser = require('body-parser');
const db = require("./db")
Routes1 = require("./controllers/assignment.controller")
Routes2 = require("./controllers/login.controller")


app.use((req,res,next)=>{
	console.log("HTTP Method - "+ req.method + " , URL  - "+req.url);
	next();
})

//middleware
app.use(bodyparser.json())
app.use('/api/assignment', Routes1)
app.use('/api/auth',Routes2)
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})

db.query("SELECT 1")
    .then(()=>{
        console.log("Database connection established..");
        app.listen(7000,
            ()=>console.log("server started at 7000"))
    }).catch((err)=> console.log("Database connection failed \n"+err))

