// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: false
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: true
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];

const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
