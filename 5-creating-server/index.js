const express = require("express");
const app = express();

//ROUTES
app.get("/products", (req, res) => {
  //   console.log(req);
  res.send("This is Product Page.");
});

app.listen(8080, () => {
  console.log(`SERVER LISTENING AT PORT : 8080`);
});
