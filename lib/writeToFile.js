const fs = require('fs');
const success = require('./success.js');

//  a function to write README file
function writeToFile(fileName, data) {

  // create 'output' folder if it doesn't exist
  const folderName = "output";

  if (!fs.existsSync(`./${folderName}`)) {
    fs.mkdir(folderName, (err) => {
      err
        ? console.error(`Error creating folder '${folderName}': ${err.message}`)
        : console.log(`Folder '${folderName}' created successfully.`);
    });
  }

  // write the file to the output folder and display success message
  fs.writeFile(`./${folderName}/${fileName}`, data, (err) => {
    err
      ? console.error(err)
      : console.log(success(`Generated '${fileName}' in folder ./${folderName}`));
  });
}

// exports from this module to other modules    
module.exports = writeToFile