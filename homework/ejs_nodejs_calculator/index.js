let express = require("express");
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

app.post("/calculator-result", (req, res) => {
  try {
    let output;
    switch (req.body.operation) {
      case "+":
        output = Number(req.body.number_1) + Number(req.body.number_2);
        break;
      case "-":
        output = Number(req.body.number_1) - Number(req.body.number_2);
        break;
      case "/":
        output = Number(req.body.number_1) / Number(req.body.number_2);
        break;
      case "*":
        output = Number(req.body.number_1) * Number(req.body.number_2);
        break;
    }
    res.render("calculator_output", { result: output });
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Server started on port ${port}`);
});
