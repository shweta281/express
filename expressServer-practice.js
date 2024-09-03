const express= require("express");
const path= require("path");
const app= express();


app.use(express.static(path.join(__dirname,"./navbar-app/public")))

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./public/navbar.html"));
    // res.status(200).send("Home pg");
// })

app.all("*", (req, res) => {
    res.status(404).send("<h1>This resource dont exists</h1>")
})

app.listen(5000, () => {
    console.log("Server listening on local port 5000...");
})