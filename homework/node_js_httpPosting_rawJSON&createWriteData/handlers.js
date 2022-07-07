const fs = require("fs");

const writeDataFile = (path, data) => {
  return new Promise((success, fail) => {
    fs.appendFile(path, data, (err) => {
      if (err) {
        return fail(err);
      }
      return success();
    });
  });
};

const createAndWriteFileData = async (req, res) => {
  try {
    let write = await writeDataFile(
      "./example_file.txt",
      JSON.stringify(req.body)
    );
    res.send("example_file.txt has been created!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createAndWriteFileData,
};
