const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url);
};

module.exports = connectDB;
// mongoose
//   .connect(connectionString)
//   .then(() => console.log("connected to the database"))
//   .catch((error) => console.log(error));
