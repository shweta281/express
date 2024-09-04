const express=require("express")
const { people } = require("./data")
const app= express()

app.use(express.json())
//GET
app.get("/api/people", (req,res)=>{
    res.status(200).json(people);
})

//POST
app.post("/api/people", (req,res)=>{
    const {name}=req.body;
    if(name){
        return res.status(400).json({succes:true, person:name})
    }
    else{
        return res.status(401).json({success:"please provide a valid name"})
    }
})

//PUT
app.put("/api/people/:id", (res,req)=>{
    
})

app.listen(5000, ()=>{
    console.log("listening on 5000");
    
})