const http = require("http");

const server = http
  .createServer((req, res) => {
    let [_, operator, a, b] = req.url.split("/");

    if (operator === "divide" && b === "0") {
      res.end("You can't divide a number with 0");
      return;
    }

    let result = 0;

    switch (operator) {
      case "plus":
        result = Number(a) + Number(b);
        break;
      case "minus":
        result = Number(a) - Number(b);
        break;
      case "divide":
        result = Number(a) / Number(b);
        break;
      case "multiply":
        result = Number(a) * Number(b);
        break;
      case "modus":
        result = Number(a) % Number(b);
        break;
      default:
        return res.end("You have not put a valid operator");
    }

    res.end(`${result}`);
  })
  .listen(10000);
