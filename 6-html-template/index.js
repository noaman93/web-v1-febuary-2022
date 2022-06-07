const express = require("express");
const app = express();

const path = require("path");

//config static assets
app.use(express.static("public"));

//view engine
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

// routes
app.get("/", (req, res) => {
  //   res.send("<h1>This will be Home Page</h1>");
  res.render("home");
});

app.get("/contact", (req, res) => {
  //   res.send("<h1>Contact Us Page</h1>");
  res.render("contact");
});

app.get("/products", (req, res) => {
  //   res.send("<h1>Products Page</h1>");
  // const products = ["Jeans", "Shoes", "Polo", "Belts"];
  const products = [
    { name: "Jeans", price: 2100 },
    { name: "Shoes", price: 3400 },
    { name: "Polo", price: 1500 },
    { name: "Belts", price: 900 },
  ];
  res.render("products", { products });
});

app.get("/blogs", (req, res) => {
  //   res.send("<h1>Blogs Page</h1>");
  res.render("blogs");
});

app.get("/random", (req, res) => {
  let num = Math.floor(Math.random() * 10) + 1;
  const name = "Ali Hamza";
  res.render("random", { num, name });
});

app.listen(8080, () => {
  console.log(`Server Started`);
});
