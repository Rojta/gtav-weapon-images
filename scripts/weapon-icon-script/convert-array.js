const fs = require("fs");

// Read the file and parse it
let data = fs.readFileSync("icons-script/input.json");
let json = JSON.parse(data);

// Remap the array
let remappedJson = json.map((item) => ({
  hash: item.hash,
  id: item.wid,
  image: item["image-src"],
}));

// Stringify the remapped array
let outputData = JSON.stringify(remappedJson, null, 2);

// Write the output to a file
fs.writeFileSync("icons-script/output.json", outputData);
