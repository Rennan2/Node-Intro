const fs = require('fs');
const process = require('process');
const axios = require('axios');

/** read file and print */

function cat(path){
    fs.readFile(path, 'utf8', function(err, data){
        if (err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        } else {
            console.log(data);
        }
    });
}

/** Read page at URL and print  */

async function webCat(url){
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (error) {
        console.error(`Error fetching ${url}: ${error.message}`);
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}
