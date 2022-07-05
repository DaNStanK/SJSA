const http = require("http");
const fs = require("fs");
const url = require("url");

const fileRead = (filename) => {
  return new Promise((success, fail) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        return fail(err);
      }
      return success(data);
    });
  });
};

const findResult = (request, htmlContent) => {
  const qs = url.parse(request.url, true).query;
  let [operator, _] = request.url.split("?");
  operator = operator.replace(/\//, "");
  let result = "";

  if (operator === "divide" && qs.b === "0") {
    result =
      "No number is divideable with 0! Choose another number not equal to zero.";
    return (htmlContent = htmlContent.replace(/{{res}}/, result));
  } else {
    switch (operator) {
      case "plus":
        result = `${Number(qs.a) + Number(qs.b)}`;
        break;
      case "minus":
        result = `${Number(qs.a) - Number(qs.b)}`;
        break;
      case "multiply":
        result = `${Number(qs.a) * Number(qs.b)}`;
        break;
      case "divide":
        result = `${Number(qs.a) / Number(qs.b)}`;
        break;
      default:
        result = "You have not put a proper operator in the URL!";
        break;
    }
    return (htmlContent = htmlContent.replace(/{{res}}/, result));
  }
};

const pages = {
  "/plus": async (req, res) => {
    let content = await fileRead("./index.html");
    res.end(findResult(req, content));
  },
  "/minus": async (req, res) => {
    let content = await fileRead("./index.html");
    res.end(findResult(req, content));
  },
  "/multiply": async (req, res) => {
    let content = await fileRead("./index.html");
    res.end(findResult(req, content));
  },
  "/divide": async (req, res) => {
    let content = await fileRead("./index.html");
    res.end(findResult(req, content));
  },
};

const server = http
  .createServer((req, res) => {
    // query string parameters // GET parameters
    // http://localhost:8080/users?a=10&b=5
    // /users?a=10&b=5
    // /users                                     a=10&b=5

    let [path, _] = req.url.split("?");
    if (pages[path]) {
      pages[path](req, res);
    } else {
      res.end("");
    }
  })
  .listen(8080);
