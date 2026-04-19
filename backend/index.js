const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const userRoutes = require("./Route/userroute");
const examRoutes = require("./Route/examroute");
const resultRoutes = require("./Route/resultroute");
const app = express();

//env
const PORT = process.env.PORT;

// Middleware
app.use(express.json());   
app.use(express.urlencoded({ extended: true })); 
app.use("/api", userRoutes);  //done
app.use('/api',examRoutes); //done
app.use('/api',resultRoutes); //



//db
mongoose.connect("mongodb://localhost:27017/exam")
    .then(() => {
    app.listen(PORT, () => {
    console.log(` http://localhost:${PORT}`);
});
    }).catch((err) => {
    console.log(err,`failed${err.message}`);
    
    });

