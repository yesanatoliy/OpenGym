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
        const { userId } = req.params
        req.body = { ...req.body, user_id: userId }
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
        const event = await Event.findByIdAndUpdate(req.params.eventId, req.body, {new: true})
        res.status(200).json(event)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteEvent = async (req,res) => {
    try{
        const { eventId } = req.params
        const deleted = await Event.findByIdAndDelete(eventId)
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
        const { eventId } = req.params
        const event = await Event.findById(eventId)
        if (event) {
            return res.status(200).json({ event })
        }
        return res.status(404).send(error.message)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getEventComments = async (req,res) => {
    try{
        const { eventId } = req.params
        const comments = await Comment.find({ event_id: eventId })
        if (comments) {
            return res.status(200).json({ comments })
        }
        return res.status(404).send(error.message)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createComment = async (req, res) => {
    try{
        const { eventId, userId } = req.params
        req.body = { ...req.body, event_id: eventId, user_id: userId }
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
        const comment = await Comment.findByIdAndUpdate(req.params.commentId, req.body, {new: true})
        res.status(200).json(comment)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteComment = async (req,res) => {
    try{
        const { commentId } = req.params
        const deleted = await Comment.findByIdAndDelete(commentId)
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
        const { userId } = req.params
        const user = await User.findById(userId)
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
        const { userId } = req.params
        const deleted = await User.findByIdAndDelete(userId)
        if (deleted) {
            return res.status(200).send("User deleted")
        }
        throw new Error("User not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateUser = async (req,res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
        res.status(200).json(user)
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
    getEventComments,
    createComment,
    updateComment,
    deleteComment,
    getUser,
    createUser,
    deleteUser,
    updateUser
}