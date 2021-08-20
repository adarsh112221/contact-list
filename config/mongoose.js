//require the library
const mongoose = require("mongoose");
//connect the data base
mongoose.connect("mongodb://localhost/contacts_list_db");
//accquire the connection to check if it successful
const db = mongoose.connection;
//errror
db.on("error", console.error.bind(console, "error connecting to db"));
//if it is up and running  the print message
db.once("open", function() {
  console.log("successfully connect");
});
