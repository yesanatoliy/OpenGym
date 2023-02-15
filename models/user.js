const { Schema } = require('mongoose')

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: false}
})

module.exports = userSchema