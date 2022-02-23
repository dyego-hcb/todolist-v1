const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const itens = [];
const workItens = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  const day = date.getDay();
  res.render("list", { listTitle: day, novoItemAdd: itens });
});

app.post("/", function (req, res) {
  const item = req.body.novoItem;
  if (req.body.list === "Work") {
    workItens.push(item);
    res.redirect("/work");
  } else {
    itens.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", novoItemAdd: workItens});
});

app.post("/work", function (req, res) {
  const item = req.body.novoItem;
  workItens.push(workItens);
  res.redirect("/work");
}); 

app.get("/about", function (req, res){
    res.render("about");
})

app.listen(3000, function () {
  console.log("O SERVIDOR FOI INICIADO NA PORTA 3000");
});
