const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (request, response) => {
  response.send(index.html);
});

app.get("/cars", (req, res) => {
  res.render("cars");
});

app.get("/cats/", (req, res) => {
  res.render("cats");
});

app.get("/cats/cuddles", (req, res) => {
  var cat_array = [
    {
      name: "Cuddles",
      food: "Spaghetti",
      age: 3,
      SleepSpots: ["under the bed", "in a sunbeam"]
    }
  ];
  res.render("details", { cat: cat_array });
});

app.get("/cats/lotus", (req, res) => {
  var cat_array = [
    {
      name: "Lotus",
      food: "Root",
      age: 5,
      SleepSpots: ["in water", "under the night sky", "in ponds as well"]
    }
  ];
  res.render("details", { cat: cat_array });
});

app.get("/cats/pj", (req, res) => {
  var cat_array = [
    {
      name: "PJ",
      food: "Everything",
      age: 6,
      SleepSpots: ["under the covers", "the floor", "the couch"]
    }
  ];
  res.render("details", { cat: cat_array });
});

app.get("/cars/new", (req, res) => {
  res.render("form");
});

app.listen(8000, () => console.log("listening on port 8000"));
