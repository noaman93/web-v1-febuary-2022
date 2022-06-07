const express = require("express");
const app = express();

//fake database
const recepies = [
  {
    id: "1",
    title: "Benefits of organic food",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://media.istockphoto.com/photos/paleo-diet-healthy-food-background-picture-id1301565375?b=1&k=20&m=1301565375&s=170667a&w=0&h=D-u_kxPS9SL5MWmhN0xbwfNxPmqbqzhyjYvypM7V7xU=",
  },
  {
    id: "2",
    title: "Pasta Mania",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://media.istockphoto.com/photos/vegetarian-dishes-picture-id1313418058?b=1&k=20&m=1313418058&s=170667a&w=0&h=-BZRud6u510emxg26hpFdOtsPSjOEsB0OCsIue_cdi8=",
  },
  {
    id: "3",
    title: "Jombo Beef Steak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://media.istockphoto.com/photos/barbecue-rib-eye-steak-or-rump-steak-dry-aged-wagyu-entrecote-steak-picture-id1079920024?b=1&k=20&m=1079920024&s=170667a&w=0&h=FZconGrzfpDXhzoV0qaUFKxVBObMowMD5tr2sIN0or0=",
  },
];

//parsing data form req.body
app.use(express.urlencoded({ extended: true }));

//static aeesets
app.use(express.static("public"));

//view engine
app.set("view engine", "ejs");

//home page route
app.get("/", (req, res) => {
  //   console.log(recepies[1]);
  res.render("home");
});

//training page route
app.get("/training", (req, res) => {
  res.render("training");
});

//recepies page route
app.get("/recepies", (req, res) => {
  //database give mev all recepies
  res.render("recepies/recepies", { recepies });
});

//render create new recepie form
app.get("/recepie/new", (req, res) => {
  res.render("recepies/new");
});

//create new recepie
app.get("/add-recepie", (req, res) => {
  //logic
  // console.log(req.query);
  //save data into database
  // const id = req.query.id;
  // const text = req.query.text;
  // const title = req.query.title;
  // const img = req.query.img;

  const { id, title, text, img } = req.query;
  recepies.push({ id, title, text, img });

  res.redirect("/recepies");
});

//create new recepie POST
app.post("/recepies", (req, res) => {
  console.log(req.body);
});

//show page route
app.get("/recepie/:id", (req, res) => {
  // console.log(req.params);
  const id = req.params.id;

  //database fetch recepie with this id
  const foundRecepie = recepies.find((r) => {
    return r.id === id;
  });

  res.render("recepies/show", { foundRecepie });
});

//render edit page
app.get("/recepie/:id/edit", (req, res) => {
  const id = req.params.id;

  //database fetch recepie with this id
  const foundRecepie = recepies.find((r) => {
    return r.id === id;
  });
  // console.log(foundRecepie);
  res.render("recepies/edit", { foundRecepie });
});

//update Recepie
app.post("/recepie-update/:id", (req, res) => {
  let id = req.params.id;

  //logic to update the current array element
  console.log(req.body);

  res.send("Success Updated The Recepie");
});

//delete route
app.get("/recepie-delete/:id", (req, res) => {
  let id = req.params.id;

  //logic to delete element from an exting array

  res.send("Scuccessfully Deleted the item");
});
app.listen(8080, () => {
  console.log("SERVER STARTED");
});
