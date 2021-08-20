const express = require("express");
const path = require("path");
const port = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assets"));

//middleware1
app.use(function (req, res, next) {
  req.myName = "adarsh";
  console.log("middleware 1 called");
  next();
});

//middleware2
app.use(function (req, res, next) {
  console.log("middleware 2 called", req.myName);
  next();
});

var contactList = [
  {
    name: "Arpan",
    phone: "11111111",
  },
  {
    name: "Tony Stark",
    phone: "222222222",
  },
  {
    name: "coding-ninjas",
    phone: "232313242313",
  },
];

app.get("/", function (req, res) {
  return res.render("home", {
    title: "i am invensiable",
    contact_list: contactList,
  });
});
app.get("/practice", function (req, res) {
  return res.render("practice", {
    title: "Let us play with ejs",
  });
});

app.get("/delete-contact", function (req, res) {
  console.log(req.query);
  let phone = req.query.phone;
  let contactIndex = contactList.findIndex((contact) => contact.phone == phone);

  if (contactIndex != -1) {
    contactList.splice(contactIndex, 1);
  }
  return res.redirect("back");
});

app.post("/create-contact", function (req, res) {
  console.log(req.myName);
  contactList.push(req.body);
  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log("error on running my express app");
  }
  console.log("my express folder is up and running");
});
