const express = require("express");
const app = express();
const PORT = process.env.PORT || 9999;
const mongoose = require("mongoose");
require("dotenv").config()

// Serve static content for the app from the "public" directory in the application directory.
// (html allower)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '../../public'));

  // INDEX HTML
  app.get("/", function (req, res) {
    res.sendFile("/index.html");
});

// require("./server/routes/submitForm.routes")(app)
// require("./server/routes/nodeMailerRoutes")(app)
require("./serverFiles/routes/htmlroutes")(app)

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/griffinsurettDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected To Database!!"))
  .catch((err) => console.log("error:" + err));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))