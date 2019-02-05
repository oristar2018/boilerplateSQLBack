const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./sequelize/config");



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("body-parser").text());
app.use(express.static("public"));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8888"],
    credentials: true
  })
);
app.use('/users', require('./routes/routes'));

db.authenticate()
  .then(() => console.log("connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.render("render1");
});

const port = 8888;

app.listen(port);