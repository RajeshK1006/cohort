const process = require("process");
const fs = require("fs/promises");
const path = require('path');

const createFile = (name, content) => {

    try {
    const filepath =  path.join(__dirname,name);
    fs.writeFile(filepath, content);
    console.log("File is created sucessfulyy");
    }
    catch(err){
        console.log(err);
    }
}

const args = process.argv;

createFile(args[2], args[3]);
