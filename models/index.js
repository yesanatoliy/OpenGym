const mongoose = require('mongoose')
const userSchema = require('./user')
const eventSchema = require('./event')
const commentSchema = require('./comment')

const User = mongoose.model('User', userSchema)
const Comment = mongoose.model('Comment', commentSchema)
const Event = mongoose.model('Event', eventSchema)

module.exports = {
    User,
    Event,
    Comment
}
