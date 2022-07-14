let calculator = (req, res) => {
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
};

module.exports = {
  calculator,
};
