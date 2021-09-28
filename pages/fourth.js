const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "../assets/files");

//for create files
for (i = 0; i < 5; i++) {
  fs.writeFileSync(`${dirPath}/hello${i}.text`, "hello sir i am testing!");
}

//for print file names
// fs.readdir(dirPath, (err, files) => {
//   files.forEach((file, index) => {
//     console.log(`your file is ${index} : ${file}`);
//   });
// });
