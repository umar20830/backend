const fs = require("fs");
const path = require("path");


function clutter() {

    //first read Directory of clutter

    fs.readdir("clutter", function (err, data) {
        if (err) console.log(err.message);
        else {

            // Create a new directory that organize files in beautiful way

            if (fs.existsSync("organizeClutter")) {
                console.log("File is present!");
                createDirByFileExtension();
                transferFiles();
            }
            else {
                fs.mkdir("organizeClutter", function (err) {
                    if (err) console.log(err, message);
                    else {
                        console.log("organizeClutter directory is created!");
                        createDirByFileExtension();
                        transferFiles();
                    };
                })
            }

            // Create directories according to file extension in organizeClutter 

            function createDirByFileExtension() {

                // Apply loop on data that we got from clutter

                for (const filename of data) {
                    let ext = path.extname(filename).replace(".", "");

                    // Check if directory already exist

                    if (fs.existsSync(`organizeClutter/${ext}`)) {
                        console.log(`${ext} is already exist.`);
                    }
                    else {
                        fs.mkdirSync(`organizeClutter/${ext}`);
                    }

                }

            }

            // Transfer files from clutter to organizeClutter according to their extensions

            function transferFiles() {

                // Again apply loop on data that we got from clutter

                for (const filename of data) {
                    let ext = path.extname(filename).replace(".", "");

                    if (filename.endsWith(ext)) {

                        fs.rename(`clutter/${filename}`, `organizeClutter/${ext}/${filename}`, function (err) {
                            if (err) console.log(err.message);
                            else console.log("Files transfer is done!");
                        })

                    }

                }

            }

        }
    })


}

clutter();
