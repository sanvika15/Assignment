// api calls
import querystring from 'node:querystring';

const baseUrl = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6'

const createRequestUrl = (limit, offset) => { 
    const parameters = {
        'api-key': '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b',
        format: 'json',
        offset,
        limit
    }

    const url = baseUrl + '?' + querystring.stringify(parameters);
    return url;
}

const fetchResponse = async (fetch_offset) => {
    const response1 = await fetch(createRequestUrl(10,fetch_offset));
    const {total, count, offset, records} = await response1.json();
    console.log(`Total records: ${total}`);
    console.log(`Records fetched: ${count}`);
    console.log(`Offset: ${offset}`);
    return records;
}

const promiseArray = [
    fetchResponse(31),
    fetchResponse(51),
    fetchResponse(61),
];

const result = await Promise.all(promiseArray);
const data = [].concat(...result);
console.log(data);