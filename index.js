const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("Hello from Node API server updated");
});



mongoose
  .connect(
    "mongodb+srv://miguelanggelo:mongodb0@cluster0.9kkfidg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("conectado a la base de datos");
    app.listen(3000, () => {
      console.log("el servidor se esta ejecutando en el puerto 3000");
    });
  })
  .catch(() => {
    console.log("la conexion ha fallado");
  });
