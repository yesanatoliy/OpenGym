const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    name: {type: String, required: true},
    profilePic: {type: String, required: false}
})

const Comment = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'user_id'},
    event_id: {type: Schema.Types.ObjectId, ref: 'event_id'},
    contents: {type: String, required: true}
})

const Event = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'user_id'},
    name: {type: String, required: true},
    address: {type: String, required: true},
    cost: {type: Number, required: true},
    level: {type: String, required: true},
    contact: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    description: {type: String, required: true}
})