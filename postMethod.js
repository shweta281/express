const express=require("express")
const app=express()
const {people}= require("./data.js")

app.use(express.static("./methods-public"))
//to parse form data we use urlencoded middleware
app.use(express.urlencoded({extended: false}))
// for parsing json brah
app.use(express.json())

app.post("/login", (req,res)=>{
    const { name }=req.body;
    if(name){
        res.status(200).send(`Welcome! ${name}`)
    }
    else{
        res.status(401).send("Pls enter thy name")
    }
})

app.get("/", (req, res)=>{
    res.send(" ");
})

app.get("/api/people", (req,res)=>{
    res.status(200).json({ success: true, data : people})
})

app.post("/api/people", (req,res)=>{console.log(req.body)
    const {name}=req.body;
    if(!name){
        res.status(400).json({succes:false, msg:"thy shall enter thine correct name"})
    }
    res.status(200).json({succes:true, person:name});
})

app.listen(5000, ()=>{
    console.log("listening to 5000");
})