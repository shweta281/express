const express = require("express");
const people=require("./Routes/people")

const app = express();

app.use(express.json());

app.use("/api/people", people);

app.listen(5000, () => {
  console.log("listening on 5000");
});
