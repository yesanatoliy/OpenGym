const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.post('/events', controllers.createEvent)
router.get('/events', controllers.getAllEvents)
router.get('/events/:id', controllers.getEventById)
router.put('/events/:id', controllers.updateEvent)
router.delete('/events/:id', controllers.deleteEvent)
router.post('/user', controllers.createUser)
router.get('/user/:id', controllers.getUser)
router.put('/user/:id', controllers.updateUser)
router.delete('/user/:id', controllers.deleteUser)
router.post('/comments', controllers.createComment)
// router.delete('/comments/:id', controllers.deleteComment)
// router.put('/comments/:id', controllers.updateComment)



module.exports = router