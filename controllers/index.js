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
        if (event) {
            return res.status(200).json({ event })
        }
        return res.status(404).send(error.message)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// const getComments = async (req,res) => {
//     try{
//         const { id } = req.params

//     }
// }

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

const updateComment = async (req, res) => {
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(comment)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteComment = async (req,res) => {
    try{
        const { id } = req.params
        const deleted = await Comment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Comment deleted")
        }
        throw new Error("Comment not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getUser = async (req,res) => {
    try{
        const { id } = req.params
        const user = await User.findById(id)
        if (user) {
            return res.status(200).json({ user })
        }
        return res.status(404).send(error.message)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createUser = async (req, res) => {
    try{
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const deleteUser = async (req,res) => {
    try{
        const { id } = req.params
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("User deleted")
        }
        throw new Error("User not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    getEventById,
    createComment,
    updateComment,
    deleteComment,
    getUser,
    createUser,
    deleteUser
}