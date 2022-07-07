let express = require("express");
let handlers = require("./handlers");

const app = express();
const port = 8080;
app.use(express.json());

app.post("/students", handlers.createAndWriteFileData);

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`You are listening on port: ${port}`);
});
