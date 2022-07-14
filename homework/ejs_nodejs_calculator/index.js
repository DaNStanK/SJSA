let express = require("express");
let handlers = require("./handlers");
let port = 8080;
let app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/calculator", (req, res) => {
  try {
    res.render("calculator_input");
  } catch (err) {
    res.send(err);
  }
});

app.post("/calculator-result", handlers.calculator);

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Server started on port ${port}`);
});
