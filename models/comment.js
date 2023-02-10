const { Schema } = require('mongoose')

const commentSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'user_id'},
    event_id: {type: Schema.Types.ObjectId, ref: 'event_id'},
    contents: {type: String, required: true}
})

module.exports = commentSchema