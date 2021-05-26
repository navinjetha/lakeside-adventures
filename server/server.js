require("dotenv").config();
const express = require("express");
const connectDB = require('./models/db');
const productRoutes = require('./routes/productRoutes')
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./config/db.config");
const { authJwt } = require("./middlewares");

const stripe = require("stripe"(process.env.STRIPE_SECRET_TEST))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


connectDB();
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
  };
  
app.use(cors(corsOptions));
  

app.use(express.json());

// test private route
app.get("/", [authJwt.verifyToken], (req, res) => {
  res.json({ message: "Welcome to private method of the application." });
});

// routes
require("./routes/auth.routes")(app);

app.use("/api/products", productRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})
