const { renameFile } = require("./FS Methods/rename_file");
const { mkdir } = require("./FS Methods/make_directory");
const { copyFile } = require("./FS Methods/copy_file");
const { chmod } = require("./FS Methods/changer_mode");
const { readdir } = require("./FS Methods/read_dir");

renameFile("rename.js", "rename1.js")
  .then(() => {
    console.log("File renamed to rename1.js");
    return renameFile("rename1.js", "rename2.js");
  })
  .then(() => {
    console.log("File renamed to rename2.js");
  })
  .catch((err) => {
    console.log(err);
  });

(async () => {
  try {
    await renameFile("rename.js", "rename1.js");
    console.log("File renamed to rename1.js");
    await renameFile("rename1.js", "rename2.js");
    console.log("File renamed to rename2.js");
  } catch (err) {
    console.log(err);
  }
})();

mkdir("./NewDirectory")
  .then(() => {
    console.log("Directory NewDirectory was created!");
    return mkdir("./NewDirectory 1");
  })
  .then(() => {
    console.log("Directory NewDirectory 1 were created!");
  })
  .catch((err) => {
    console.log(err);
  });

(async () => {
  try {
    await mkdir("./NewDirectory");
    console.log("NewDirectory created!");
    await mkdir("./NewDirectory1");
    console.log("NewDirectory1 created!");
  } catch (err) {
    console.log(err);
  }
})();

copyFile("rename.js", "rename_1.js")
  .then(() => {
    console.log("File copied to rename_1.js");
    return copyFile("rename.js", "rename_2.js");
  })
  .then(() => {
    console.log("File copied to rename_2.js!");
  })
  .catch((err) => {
    console.log(err);
  });

(async () => {
  try {
    await copyFile("rename.js", "rename_copy1.js");
    console.log("File copied to rename_copy1.js!");
    await copyFile("rename.js", "rename_copy2.js");
    console.log("File copied to rename_copy2.js!");
  } catch (err) {
    console.log(err);
  }
})();

chmod("file1.js", 0o755)
  .then(() => {
    console.log("file1 permisions changed!");
  })
  .catch((err) => {
    console.log(err);
  });

(async () => {
  try {
    await chmod("file1.js", 0o765);
    console.log("file1 permissions changed again1!");
  } catch (err) {
    console.log(err);
  }
})();

readdir("Dir1")
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

(async () => {
  try {
    await readdir("Dir1");
  } catch (err) {
    console.log(err);
  }
})();
