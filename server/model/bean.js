const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Bean = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    }
}, {
    collection: 'beans'
});
module.exports = mongoose.model('Bean', Bean);