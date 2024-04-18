import { log } from 'console';
import { readFile } from 'fs'; // importing named function readFile

const readFilePromise = (filename) => {
  return new Promise((resolve, reject) => {
    readFile(filename, 'utf8', (err, data) => {
      if (err) {
          reject(err);
          return;
      }      
      resolve(data);
    });
  });
};

await readFilePromise('./poem.txt')
  .then((data) => {
    console.log("\nCall 1 Output:");
    console.log('File content:\n');
    console.log(data);
  })
  .catch((error) => {
    console.log("\nCall 1 Output:");
    console.error('Error reading the file:', error);
  });

readFilePromise('./poem.txt23')
  .then((data) => {
    console.log("\nCall 2 Output:");
    console.log('File content:\n');
    console.log(data);
  })
  .catch((error) => {
    console.log("\nCall 2 Output:");
    console.error('Error reading the file:', error);
  });