const { Comment, Event, User } = require('../models')

const getAllEvents = async (req, res) => {
    try{
        const events = await Event.find()
        return res.status(200).json({ events })
    } catch (e) {
        return res.status(500).send(error.message)
    }
}

const createEvent = async (req, res) => {
    try{
        const event = await new Event(req.body)
        await event.save()
        return res.status(201).json({
            event
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateEvent = async (req,res) => {
    try{
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(event)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteEvent = async (req,res) => {
    try{
        const { id } = req.params
        const deleted = await Event.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Event deleted")
        }
        throw new Error("Event not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getEventById = async (req,res) => {
    try{
        const { id } = req.params
        const event = await Event.findById(id)
        if (plant) {
            return res.status(200).json({ event })
        }
        return res.status(404).send(error.message)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createComment = async (req, res) => {
    try{
        const comment = await new Comment(req.body)
        await comment.save()
        return res.status(201).json({
            comment
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    getEventById,
    createComment,
}