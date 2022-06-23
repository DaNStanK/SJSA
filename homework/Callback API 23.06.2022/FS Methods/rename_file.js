const fs = require("fs");

const renameFile = (oldName, newName) => {
  return new Promise((success, fail) => {
    fs.rename(oldName, newName, (err) => {
      if (err) {
        return fail(err);
      }
      return success();
    });
  });
};

module.exports = {
  renameFile,
};
