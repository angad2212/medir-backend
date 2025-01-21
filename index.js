const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

//importing the routes:
const userRoutes = require('./routes/userRoutes');
const medicineRoutes = require('./routes/medicineRoutes');
const pharmacyRoutes = require('./routes/pharmacyRoutes');

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/medicines", medicineRoutes);
app.use("/pharmacies", pharmacyRoutes);

app.listen(PORT, ()=>{
    console.log(`Port running on port: ${PORT}`)
})