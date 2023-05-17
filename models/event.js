const { Schema } = require('mongoose')

const eventSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'user_id' },
    name: { type: String, required: true },
    address: { type: String, required: true },
    cost: { type: String, required: true },
    level: { type: String, required: true },
    contact: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
})

module.exports = eventSchema