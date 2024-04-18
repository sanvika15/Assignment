import fs from 'fs';

const response = fs.readFileSync('./response.json', 'utf8');
const responseJSON = JSON.parse(response);

console.log(typeof(responseJSON));

const mappedList = responseJSON.map((item) => {
    return {
        name: item.name,
        year: item.vehicle.year,
    }
}).filter(item => item.year > 2020);

console.log(mappedList);