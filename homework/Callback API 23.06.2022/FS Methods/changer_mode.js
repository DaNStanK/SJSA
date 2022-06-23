const fs = require("fs");

const chmod = (file, mode) => {
  return new Promise((success, fail) => {
    fs.chmod(file, mode, (err) => {
      if (err) {
        return fail(err);
      }
      return success();
    });
  });
};

module.exports = {
  chmod,
};
