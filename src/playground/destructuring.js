/* Object Destructring  */

// const person = {
//     name: 'Vern',
//     age: 27,
//     location: {
//         city: 'Singapore',
//         temperature: 35
//     }
// };

// const {name = 'Anonymous', age} = person
// console.log(`${name} is ${age}`);

// const {city, temperature} = person.location;
// if (city && temperature)    
//     console.log(`It's ${temperature} in ${city} `);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);



/* Array Destructring */
const address = ['1299 South Juniper Street', 'Philadelphiua', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , medium ] = item
console.log(`A medium ${coffee} cost ${medium}`);


