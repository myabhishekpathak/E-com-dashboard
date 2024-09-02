const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/product");

const Jwt = require("jsonwebtoken");
const jwtkey = "e-comm";

const app = express();

app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Signup API
app.post("/register", async (req, res) => {
  if (req.body.name && req.body.email && req.body.password) {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    // res.send(result);
    Jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (err, token) => {
      if (err) {
        res.send({
          result: "something went wrong, Please try after some time",
        });
      }
      res.send({result,  auth: token })
    })
  } else {
    console.log("please fill the above information");
  }
});
//Login API  and also restrict user to enter both email and password
app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");

    if (user) {
      // res.send(user)
      Jwt.sign({ user }, jwtkey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          res.send({
            result: "something went wrong, Please try after some time",
          });
        }
        res.send({user,  auth: token })
      })
    } else {
      res.send({ result: " User not found " });
    }
  } else {
    res.send({ result: "please provide credentials" });
  }
});

//add Product route/Api
app.post("/add-product", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});
//list product route/Api
app.get("/products", async (req, res) => {
  let products = await Product.find();
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ result: "No Products found" });
  }
});

//Delete Product API
app.delete("/product/:id", async (req, res) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});

//update Api
app.get("/product/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No record found" });
  }
});
app.put("/product/:id", async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

//search api
app.get("/search/:key", async (req, res) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});

app.listen(5000);
