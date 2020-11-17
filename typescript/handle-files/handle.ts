// var fs = require('fs');

// fs.writeFile("arquivo.txt", "Hello, txt!", function (erro: any) {

//     if (erro) {
//         throw erro;
//     }

//     console.log("Arquivo salvo");
// }); 

import * as fs from 'fs';
import * as util from 'util'
 
const writeFile = util.promisify(fs.writeFile);
 
writeFile('./file.txt',
  'Hello world!',
  { encoding: 'utf8' }
)
  .then(() => {
    console.log('File created!');
  })
  .catch(error => console.log(error));