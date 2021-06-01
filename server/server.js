require("dotenv").config();
const express = require("express");
const connectDB = require('./models/db');
const productRoutes = require('./routes/productRoutes')
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./config/db.config");
const { authJwt } = require("./middlewares");

connectDB();
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
  };
  
app.use(cors(corsOptions));
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/payment", cors(), async (req, res) => {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
  console.log('stripe', stripe)
  let {amount, id} = req.body
  console.log('amount', amount)
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "CAD",
      description: "Watersport activity",
      payment_method: id,
      confirm: true
    })

    console.log("Payment", payment)
    res.json({
      message:"Payment successful",
      success: true
    })

  } catch (error) {
    console.log("Error", error)
    res.json({
      message:"Payment failed",
      success: false
    })
  }
})

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
