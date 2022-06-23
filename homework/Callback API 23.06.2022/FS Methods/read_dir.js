const fs = require("fs");

const readdir = (directory) => {
  return new Promise((success, fail) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        return fail(err);
      }
      console.log(files);
      return success(files);
    });
  });
};

module.exports = {
  readdir,
};
