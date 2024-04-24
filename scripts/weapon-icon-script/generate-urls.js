const fs = require("fs");

// Read the file and parse it
let data = fs.readFileSync("icons-script/output.json");
let json = JSON.parse(data);

// Remap the array
let urlList = json.map((item) => item["image"]).join("\n");

// Write the output to a file
fs.writeFileSync("icons-script/output-urls.txt", urlList);
