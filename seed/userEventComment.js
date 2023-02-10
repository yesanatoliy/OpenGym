const { Event, Comment, User } = require('../models')
const db = require('../db')

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

const main = async () => {
    const user1 = await new User({
        name: 'Anatoliy9'
    })
    user1.save()
    const user2 = await new User({
        name: 'Jordan1'
    })
    user2.save()
    const events = [
        {
            user_id: user1._id,
            name: 'a5',
            address: 'roswell rd',
            cost: 5,
            level: 'C-Open',
            contact: '123@123.com',
            date: '01/10/23',
            time: '6:15pm',
            description: 'good gym'
        },
        {
            user_id: user2._id,
            name: 'tk',
            address: 'roswell rd',
            cost: 7,
            level: 'B-Open',
            contact: '123@123.com',
            date: '01/10/23',
            time: '7pm',
            description: 'good gym'
        }
    ]
    await Event.insertMany(events)
    const comments = [
        {
            user_id: user1._id,
            event_id: events[0]._id,
            contents: `you get to stay on all night if you win!`
        },
        {
            user_id: user1._id,
            event_id: events[1]._id,
            contents: `you get to stay on all night if you win or lose!`
        },
        {
            user_id: user2._id,
            event_id: events[0]._id,
            contents: `this place sucks!`
        },
        {
            user_id: user2._id,
            event_id: events[1]._id,
            contents: `this place rules!`
        }
    ]
    await Comment.insertMany(comments)
    console.log(`Seeded!`)


}

const run = async () => {
    await main()
    db.close()
}

run()