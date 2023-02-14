const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.post('/events', controllers.createEvent)
router.get('/events', controllers.getAllEvents)
router.get('/events/:eventId', controllers.getEventById)
router.put('/events/:eventId', controllers.updateEvent)
router.delete('/events/:eventId', controllers.deleteEvent)
router.post('/user', controllers.createUser)
router.get('/user/:userId', controllers.getUser)
router.put('/user/:userId', controllers.updateUser)
router.delete('/user/:userId', controllers.deleteUser)
router.post('/comments', controllers.createComment)
// router.delete('/comments/:id', controllers.deleteComment)
// router.put('/comments/:id', controllers.updateComment)



module.exports = router