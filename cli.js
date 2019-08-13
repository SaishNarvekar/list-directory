#!/usr/bin/env node
const fs = require("fs");

fs.readdir(".", (err, files) => {
    files.forEach((file, index) => {
        var stats = fs.statSync(file);
        // Checking for hidden files
        if (file[0] === ".") {
            return;
        }
        process.stdout.write(file);

        // If its directory append / after the name.
        if (stats.isDirectory()) {
            process.stdout.write("/");
        }
        // Printing Output With Proper Spaces Code
        if (index < files.length - 1) {
            process.stdout.write("\n");
        }
    });
});
