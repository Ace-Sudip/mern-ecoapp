const express = require("express");
const app = express();
const dbConfig = require("./db");
const bodyParser = require('body-parser')
const path = require('path'); 

app.use(express.json());
app.use(bodyParser.json())

const productRoute = require("./routes/productRoute");
app.use("/api/products", productRoute);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})


const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Node server started."));


