// Activity 1, 2 and 3

// const addTwo = require('./index')
// console.log(addTwo(4,5));
// const person = require('./index')
// console.log(person.fullName())
const {addTwo, person} = require('./index')
console.log(addTwo(4,5));
console.log(person.fullName());


// Activity 4 using 3rd party modules
const lodash = require('lodash');
const lodAddNum = lodash.add(45443,435435);
console.log(lodAddNum);
const axios = require('axios');
async function fetchData(url) {
    try {
       const data = await  axios.get(url);
        console.log(data.data);
    } catch (error) {
        console.log(error)
    }
}
fetchData('https://api.freeapi.app/api/v1/public/randomusers');


// Activity 5 use webpack or parcel to bundle multiple files to a sinble file
