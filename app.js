const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config()

//middleware
app.use(express.json());
//req.body has all data cuz of this middleware

app.use(express.static("./public"))

app.use("/api/v1/tasks", tasks);

const port=5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
}

start()

