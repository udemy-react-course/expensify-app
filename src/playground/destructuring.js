// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const { name, age, location } = person

// console.log(`${name} is ${age}`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin',
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName) // Penguin, Self-Published

const item = ['Coffee (hot)', '$2.00', '$3.50', '$2.75']

const [drink, , mediumPrice] = item

console.log(`A medium ${drink} costs ${mediumPrice}`)