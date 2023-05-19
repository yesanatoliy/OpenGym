const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const middleware = require('../middleware')

router.get('/', (req, res) => res.send('This is root!'))
router.post('/events/user/:userId', 
middleware.stripToken,
middleware.verifyToken,
controllers.createEvent)
router.get('/events', controllers.getAllEvents)
router.get('/events/:eventId', controllers.getEventById)
router.put('/events/:eventId', 
middleware.stripToken,
middleware.verifyToken,
controllers.updateEvent)
router.delete('/events/:eventId', 
middleware.stripToken,
middleware.verifyToken,
controllers.deleteEvent)
router.post('/user', controllers.createUser)
router.post('/login', controllers.signIn)
router.get('/session', 
middleware.stripToken,
middleware.verifyToken,
controllers.checkSession)
router.get('/profile/:userId', controllers.getUser)
router.get('/user/:username', controllers.getUserByUsername)
router.put('/user/:userId', 
middleware.stripToken,
middleware.verifyToken,
controllers.updateUser)
router.delete('/user/:userId', 
middleware.stripToken,
middleware.verifyToken,
controllers.deleteUser)
router.get('/events/:eventId/comments', controllers.getEventComments)
router.put('/comments/:id', 
middleware.stripToken,
middleware.verifyToken,
controllers.updateComment)
router.delete('/comments/:id', 
middleware.stripToken,
middleware.verifyToken,
controllers.deleteComment)
router.post('/events/:eventId/comments/:userId',
middleware.stripToken,
middleware.verifyToken,
controllers.createComment)

module.exports = router