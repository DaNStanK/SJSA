const fs = require("fs");

const copyFile = (src, dest) => {
  return new Promise((success, fail) => {
    fs.copyFile(src, dest, (err) => {
      if (err) {
        return fail(err);
      }
      return success();
    });
  });
};

module.exports = {
  copyFile,
};
