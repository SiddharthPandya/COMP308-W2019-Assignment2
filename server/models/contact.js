/*   FileName: contact.js
     Student: Siddharth Pandya
     Student ID: 300915041
     Date: 03/04/2019 */

let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);