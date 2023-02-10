const { Comment, Event, User } = require('../models')

const getAllEvents = async (req, res) => {
    try{
        const events = await Event.find()
        return res.status(200).json({ events })
    } catch (e) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllEvents
}