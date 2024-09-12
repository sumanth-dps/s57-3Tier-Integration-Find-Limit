const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/getEmployees", async (req, res) => {
  let employeesData = await Employee.find().limit(200);
  res.json(employeesData);
});
app.listen(4567, () => {
  console.log("Listening to port 4567");
});
let employeeSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  gender: String,
  age: Number,
  country: String,
  department: String,
  profilePic: String,
});
let Employee = new mongoose.model("employee", employeeSchema);
// let getEmployeesFromDb = async () => {
//   let employeeData = await Employee.find();
//   console.log(employeeData);
// };
let connectToMDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://sumanthdps:sumanth@mern2406.9fvsa.mongodb.net/Tata?retryWrites=true&w=majority&appName=Mern2406"
    );
    console.log("Succcesfully connected to MongoDB");
    //getEmployeesFromDb();
  } catch (err) {
    console.log(err);
    console.log("unable to connect to MongoDB");
  }
};
connectToMDB();
