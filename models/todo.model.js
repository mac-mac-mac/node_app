const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema ({
    todo: {type: String, required: true, max: 100},
    done: {type: Boolean, required: true}
})

module.exports = mongoose.model('Todo', TodoSchema)