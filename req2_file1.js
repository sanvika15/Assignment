import fs from 'fs';

fs.readFile('./poem.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log(data);
});
