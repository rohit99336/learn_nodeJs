const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "../crud");
const filePath = `${dirPath}/test.text`;
fs.writeFileSync(filePath, "this is demo file");
fs.readFile(filePath, "utf8", (error, items) => {
  console.log(items);
});
