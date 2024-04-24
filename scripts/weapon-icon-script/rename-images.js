const fs = require("fs");
const path = require("path");

// Remove all files from the icons directory
// let outputFiles = fs.readdirSync("output-images");
// outputFiles.forEach((file) => {
//   fs.unlinkSync(`icons/${file}`);
// });

// Get a list of all files in the input-images directory
let files = fs.readdirSync("icons-script/input-images");

// Get the weapons JSON data
let weaponsData = fs.readFileSync("icons-script/output.json");

// Parse the JSON data
let weapons = JSON.parse(weaponsData);

// Iterate over the array of filenames
files.forEach((file, index) => {
  // Get the file extension
  let ext = path.extname(file);

  // Find the weapon in the weapons array
  let weapon = weapons.find((w) => w.image.includes(file));

  // If the weapon is not found, log an error and continue to the next file
  if (!weapon) {
    console.log(`No weapon entry found for ${file}`);
    return;
  }

  // Generate a new name for the file
  let newName = `${weapon.hash}${ext}`;

  // Copy the file to the output-images directory with the new name
  fs.copyFileSync(`icons-script/input-images/${file}`, `icons/${newName}`);
});
