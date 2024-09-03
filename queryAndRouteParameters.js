const { products } = require("./data.js");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home </h1><a href="/api/products"> product api </a>');
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const newProduct = products.find((item) => productId === `${item.id}`);
  newProduct
    ? res.json(newProduct)
    : res.status(404).send("oopsie resource dont exists");
});

app.get("/api/v1/query", (req,res)=>{
    const {search, limit}=req.query;
    console.log(search);
    let newprod=[...products]
    if(search){
        newprod= newprod.filter( (item)=>{ 
            return (
                `${item.id}` === search
            )})
    }
    res.status(200).json(newprod);
    
})

app.listen(5000, () => {
  console.log("Listening to port 5000...");
});
