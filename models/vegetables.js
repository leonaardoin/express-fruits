// const vegetables = [
//     {
//         name:'broccoli',
//         color: 'green',
//         readyToEat: true
//     },
//     {
//         name:'carrot',
//         color: 'orange',
//         readyToEat: true
//     },
//     {
//         name:'kale',
//         color: 'green',
//         readyToEat: true
//     },
//     {
//         name:'beet',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'cucumber',
//         color: 'yellow',
//         readyToEat: false
//     }
// ];    

// module.exports = vegetables;

const mongoose = require('mongoose');

const vegetablesSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

const Vegetables = mongoose.model('Vegetables', vegetablesSchema);

module.exports = Vegetables;
