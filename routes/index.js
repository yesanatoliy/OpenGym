const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.post('/events/user/:userId', controllers.createEvent)
router.get('/events', controllers.getAllEvents)
router.get('/events/:eventId', controllers.getEventById)
router.put('/events/:eventId', controllers.updateEvent)
router.delete('/events/:eventId', controllers.deleteEvent)
router.post('/user', controllers.createUser)
router.get('/user/:username', controllers.getUserByUsername)
router.put('/user/:userId', controllers.updateUser)
router.delete('/user/:userId', controllers.deleteUser)
router.get('/events/:eventId/comments', controllers.getEventComments)
router.put('/comments/:id', controllers.updateComment)
router.delete('/comments/:id', controllers.deleteComment)
router.post('/events/:eventId/comments/:userId', controllers.createComment)







module.exports = router