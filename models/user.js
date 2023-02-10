const { Schema } = require('mongoose')

const userSchema = new Schema({
    name: {type: String, required: true},
    profilePic: {type: String, required: false}
})

module.exports = userSchema