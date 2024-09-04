const logger= (req, res, next)=>{
    console.log(req.url, req.method, Date());
    next();
}
module.exports=logger;