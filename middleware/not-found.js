const notFound= (req,res)=> res.status(404).send("This resource does not exist")

module.exports=notFound;