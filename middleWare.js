const express=require("express");
const app=express();
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res

// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get("/", (req,res)=>{
    res.status(200).send("<center><h1>HOME</h1></center>");
})

app.get("/about", (req,res)=>{
    res.status(200).send("<h1>ABOUT</h1>")
})

app.get("/api/products", (req,res)=>{
    res.status(200).send("<center><h1>api > prod</h1></center>");
})

app.get("/api/items", (req,res)=>{
    console.log(req.user);
    res.status(200).send("<h1>api > items</h1>")
})

app.listen(5000, ()=>{
    console.log("listening on 5000");
})