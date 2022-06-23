const fs = require("fs");

const mkdir = (path) => {
  return new Promise((success, fail) => {
    fs.mkdir(path, (err) => {
      if (err) {
        return fail(err);
      }
      return success();
    });
  });
};

module.exports = {
  mkdir,
};
