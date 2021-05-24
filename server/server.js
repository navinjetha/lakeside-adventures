require("dotenv").config();
const express = require("express");
const connectDB = require('./models/db');
const productRoutes = require('./routes/productRoutes')

connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "API running..."})
})

app.use("/api/products", productRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})
