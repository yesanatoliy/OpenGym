const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.post('/events', controllers.createEvent)
router.get('/events', controllers.getAllEvents)
router.get('/events/:id', controllers.getEventById)
router.put('/events/:id', controllers.updateEvent)
router.delete('/events/:id', controllers.deleteEvent)

module.exports = router