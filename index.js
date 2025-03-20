const express = require('express');
const mongoose = require('mongoose');
const Product = require('./src/models/products.model.js')
const productRoute = require('./src/routes/product.route.js')
const app = express();
const port = 3000;

//Middleware
app.use(express.json());

//Routes
app.use("/api/products", productRoute)

app.get('/', (req, res) => {
    res.send({
        name: "Ash",
        age: 18,
        isTall: true,
        fullName: "Ashley San Pedro"
    })
});



mongoose.connect("mongodb+srv://admin:admin@backenddb.ayqbt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to the database");
    app.listen(port, () => {
        console.log(`server is running in local host ${port}`)
    });
})
.catch((error) => {
    console.error("Error ", error);
});