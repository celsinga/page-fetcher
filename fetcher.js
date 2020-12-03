const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];
const fetcher = function(url, path) {
  request(url, (error, response, body) => {
   fs.writeFile(path, body, (err) => {
     if (err) {
       console.log(err);
     } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
     }
   });
  });
};
fetcher(url, path);
